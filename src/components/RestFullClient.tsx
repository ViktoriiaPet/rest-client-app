import { useCallback, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import RequestEditor from './RequestEditor';
import ResponseSection from './ResponseSection';

import type {
  BodyMode,
  RequestSnapshot,
  RestFullChangePayload,
  RestFullClientProps,
} from '@/types/restFullClient';
import type { JSX } from 'react';

import CodePanelSheet from '@/components/CodePanelSheet';
import { useAuth } from '@/context/AuthContext';
import { logRequest } from '@/utils/logRequest';
import { buildClientUrl, toRecord, type StringRecord } from '@/utils/restUrl';
import { applyVariables, getLSVars } from '@/utils/variables';
import { type HttpMethod } from '@/types/apiMethods';
import {
  type PrefillState,
  buildRequestBody,
  computeRequestByteSizes,
  ensureContentType,
  fromB64JSON,
  headersBytesTotalFromRecord,
  headersToRecord,
  mergeQueryParams,
  normalizeMethod,
  recToRows,
  resolveBodyText,
  utf8Bytes,
} from '@/utils/restfull';

export default function RestFullClient({
  method,
  onChange,
}: RestFullClientProps): JSX.Element {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const prefillState = (location.state as { prefill?: PrefillState })?.prefill;
  const prefillQS = searchParams.get('prefill');
  const prefillFromQS = prefillQS
    ? (fromB64JSON(prefillQS) as PrefillState)
    : undefined;
  const prefill = prefillState ?? prefillFromQS;

  const initial = useMemo(() => {
    const methodNorm: HttpMethod = normalizeMethod(prefill?.method ?? method);
    const url = prefill?.url ?? '';
    const headersRows = recToRows(prefill?.headers);
    const paramsRows = recToRows(prefill?.params);
    const bodyMode = (prefill?.bodyMode as BodyMode) ?? 'none';
    const jsonText = bodyMode === 'json' ? (prefill?.bodyText ?? '') : '';
    const rawText = bodyMode === 'raw' ? (prefill?.bodyText ?? '') : '';
    return {
      method: methodNorm,
      url,
      headersRows,
      paramsRows,
      bodyMode,
      jsonText,
      rawText,
    };
  }, [prefill, method]);

  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<{
    statusCode: number;
    statusText?: string;
    bodyText?: string;
    timeMs?: number;
  } | null>(null);
  const [lastSentSnapshot, setLastSentSnapshot] =
    useState<RequestSnapshot | null>(null);

  const lastSentRef = useRef<RestFullChangePayload | null>(null);
  const emitChange = useCallback(
    (raw: RestFullChangePayload): void => {
      const next: RestFullChangePayload = { method: raw.method, url: raw.url };
      const prev = lastSentRef.current;
      if (!prev || prev.method !== next.method || prev.url !== next.url) {
        lastSentRef.current = next;
        onChange?.(next);
      }
    },
    [onChange]
  );

  async function handleSend(snapshot: RequestSnapshot): Promise<void> {
    setLoading(true);
    const t0 = performance.now();

    const vars = getLSVars(user?.uid);
    const resolvedUrl = applyVariables(snapshot.url, vars);
    const resolvedBodyText = resolveBodyText(snapshot, vars);

    const enabledParams: StringRecord = toRecord(snapshot.params);
    const enabledHeaders: StringRecord = toRecord(snapshot.headers);

    const requestUrl = mergeQueryParams(resolvedUrl, enabledParams);
    if (!requestUrl) {
      setResponse({
        statusCode: 0,
        statusText: 'Invalid URL',
        bodyText: '',
        timeMs: Math.round(performance.now() - t0),
      });
      setLastSentSnapshot(snapshot);
      setLoading(false);
      return;
    }

    const permalink = buildClientUrl({
      method: snapshot.method,
      url: requestUrl,
      headers: enabledHeaders,
    });
    navigate(permalink, { replace: true });

    const initialHeaders = ensureContentType({ ...enabledHeaders }, snapshot);
    const requestBody = buildRequestBody(snapshot, resolvedBodyText, vars);
    const {
      finalHeaders,
      requestBodyBytes,
      requestHeadersBytes,
      requestBytes,
    } = await computeRequestByteSizes(
      requestUrl,
      snapshot.method,
      initialHeaders,
      requestBody
    );

    let statusCode = 0;
    let statusText = '';
    let bodyText = '';
    let responseHeadersBytes = 0;
    let responseBodyBytes = 0;
    let errorType: string | null = null;
    let errorMessage: string | null = null;

    try {
      const res = await fetch(requestUrl, {
        method: snapshot.method,
        headers: finalHeaders,
        body: requestBody,
      });
      statusCode = res.status;
      statusText = res.statusText;
      bodyText = await res.text();
      responseBodyBytes = utf8Bytes(bodyText);
      responseHeadersBytes = headersBytesTotalFromRecord(
        headersToRecord(res.headers)
      );

      setResponse({
        statusCode,
        statusText,
        bodyText,
        timeMs: Math.round(performance.now() - t0),
      });
      setLastSentSnapshot({
        ...snapshot,
        url: requestUrl,
        body: {
          ...snapshot.body,
          ...(snapshot.body.mode === 'json'
            ? { jsonText: resolvedBodyText }
            : {}),
          ...(snapshot.body.mode === 'raw'
            ? { rawText: resolvedBodyText }
            : {}),
        },
      });
    } catch (e) {
      errorType = e instanceof Error ? e.name : 'UnknownError';
      errorMessage = e instanceof Error ? e.message : String(e);
      setResponse({
        statusCode: 0,
        statusText: errorMessage || 'Request failed',
        bodyText: '',
        timeMs: Math.round(performance.now() - t0),
      });
      setLastSentSnapshot(snapshot);
    } finally {
      const latencyMs = Math.round(performance.now() - t0);
      await logRequest({
        method: snapshot.method,
        url: requestUrl,
        params: { ...enabledParams },
        headers: { ...finalHeaders },
        bodyMode: snapshot.body.mode,
        bodyPreview: resolvedBodyText,
        latencyMs,
        statusCode,
        statusText,
        requestBytes,
        requestHeadersBytes,
        requestBodyBytes,
        responseBytes: responseHeadersBytes + responseBodyBytes,
        responseHeadersBytes,
        responseBodyBytes,
        errorType,
        errorMessage,
        userId: user?.uid ?? null,
      });
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">
      <div className="h-[37vh] overflow-auto">
        <RequestEditor
          loading={loading}
          onSend={handleSend}
          onChange={emitChange}
          method={initial.method}
          url={initial.url}
          headers={initial.headersRows}
          params={initial.paramsRows}
          bodyMode={initial.bodyMode}
          jsonText={initial.jsonText}
          rawText={initial.rawText}
        />
      </div>

      <div className="flex items-center justify-end">
        <CodePanelSheet snapshot={lastSentSnapshot} />
      </div>

      <div className="rounded-lg border border-pink-300/60 bg-pink-50/40">
        <div className="flex items-center justify-between px-4 py-2 border-b border-pink-300/60">
          <h2 className="font-semibold text-purple-600">
            {t('request.response')}
          </h2>
          {response && (
            <span className="text-[14px] text-purple-700/70">
              {response.statusCode} {response.statusText ?? ''}
            </span>
          )}
        </div>
        <div className="h-[38vh] p-3 overflow-auto">
          {response ? (
            <ResponseSection
              statusCode={response.statusCode}
              statusText={response.statusText}
              json={response.bodyText ?? ''}
              className="w-full"
            />
          ) : (
            <div className="h-full grid place-items-center text-sm opacity-70">
              {t('restfull.noResponse')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
