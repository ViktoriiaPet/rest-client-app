import React, { JSX, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RequestEditor from './RequestEditor';
import ResponseSection from './ResponseSection';

import type { HttpMethod } from '@/types/apiMethods';
import type { RequestSnapshot } from '@/types/restFullClient';

import CodePanelSheet from '@/components/CodePanelSheet';
import { useAuth } from '@/context/AuthContext';
import { logRequest } from '@/utils/logRequest';
import { buildClientUrl } from '@/utils/restUrl';
import { applyVariables } from '@/utils/variables';

export type RestFullChangePayload = {
  method: HttpMethod;
  url: string;
};

export type RestFullClientProps = {
  method?: HttpMethod;
  onChange?(v: RestFullChangePayload): void;
};

function toRecordSafe(pairs: [string, string][]): Record<string, string> {
  return pairs.reduce<Record<string, string>>((acc, [k, v]) => {
    acc[k] = v;
    return acc;
  }, {});
}

type StringRecord = Record<string, string>;

function msgFromError(e: unknown): string {
  if (e instanceof Error) return e.message;
  try {
    return typeof e === 'string' ? e : JSON.stringify(e);
  } catch {
    return String(e);
  }
}

export default function RestFullClient({
  method,
  onChange,
}: RestFullClientProps): JSX.Element {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
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
      const next: RestFullChangePayload = {
        method: raw.method,
        url: raw.url,
      };
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
    const start = performance.now();
    const vars = snapshot.variables ?? {};
    const resolvedUrlStr = applyVariables(snapshot.url, vars);
    const resolvedBodyStr =
      snapshot.body.mode === 'json'
        ? applyVariables(snapshot.body.jsonText ?? '', vars)
        : snapshot.body.mode === 'raw'
          ? applyVariables(snapshot.body.rawText ?? '', vars)
          : undefined;

    const enabledParams: StringRecord = toRecordSafe(
      snapshot.params
        .filter((p) => p.enabled && p.key)
        .map((p) => [p.key, p.value])
    );
    const enabledHeaders: StringRecord = toRecordSafe(
      snapshot.headers
        .filter((h) => h.enabled && h.key)
        .map((h) => [h.key, h.value])
    );

    const builtHref = buildClientUrl({
      method: snapshot.method,
      url: (() => {
        const u = new URL(resolvedUrlStr);
        for (const [k, v] of Object.entries(enabledParams))
          u.searchParams.set(k, v);
        return u.toString();
      })(),
      body: resolvedBodyStr,
      headers: enabledHeaders,
    });
    void navigate(builtHref, { replace: true });

    try {
      const urlObj = new URL(resolvedUrlStr);
      for (const [k, v] of Object.entries(enabledParams))
        urlObj.searchParams.set(k, v);

      const headers: StringRecord = { ...enabledHeaders };
      const methodLocal = snapshot.method;
      let body: BodyInit | undefined;
      const canSendBody = !['GET', 'HEAD'].includes(methodLocal);

      if (canSendBody) {
        switch (snapshot.body.mode) {
          case 'json': {
            const jsonText = resolvedBodyStr ?? '';
            if (!hasHeader(headers, 'content-type'))
              headers['Content-Type'] = 'application/json';
            body = jsonText;
            break;
          }
          case 'form-data': {
            const form = new FormData();
            (snapshot.body.formData ?? [])
              .filter((r) => r.enabled && r.key)
              .forEach((r) => {
                form.append(
                  applyVariables(r.key, vars),
                  applyVariables(r.value, vars)
                );
              });
            body = form;
            break;
          }
          case 'raw': {
            body = resolvedBodyStr ?? '';
            break;
          }
          case 'none':
          default: {
            body = undefined;
          }
        }
      }

      const res = await fetch(urlObj.toString(), {
        method: methodLocal,
        headers,
        body,
      });
      const text = await res.text();
      const timeMs = Math.round(performance.now() - start);

      setResponse({
        statusCode: res.status,
        statusText: res.statusText,
        bodyText: text,
        timeMs,
      });
      setLastSentSnapshot({
        ...snapshot,
        url: urlObj.toString(),
        body: {
          ...snapshot.body,
          ...(snapshot.body.mode === 'json'
            ? { jsonText: resolvedBodyStr ?? '' }
            : {}),
          ...(snapshot.body.mode === 'raw'
            ? { rawText: resolvedBodyStr ?? '' }
            : {}),
        },
        params: snapshot.params,
        headers: snapshot.headers,
      });

      const logParamsSuccess: Partial<Record<string, string>> = {
        ...enabledParams,
      };
      const logHeadersSuccess: Partial<Record<string, string>> = { ...headers };

      void logRequest({
        method: methodLocal,
        url: urlObj.toString(),
        params: logParamsSuccess,
        headers: logHeadersSuccess,
        bodyMode: snapshot.body.mode,
        bodyPreview: resolvedBodyStr ?? '',
        statusCode: res.status,
        statusText: res.statusText,
        timeMs,
        userId: user?.uid ?? null,
      });
    } catch (err: unknown) {
      const timeMs = Math.round(performance.now() - start);
      const msg = msgFromError(err);

      setResponse({
        statusCode: 0,
        statusText: msg || 'Request failed',
        bodyText: '',
        timeMs,
      });
      setLastSentSnapshot(snapshot);

      const logParamsFail: Partial<Record<string, string>> = {
        ...enabledParams,
      };
      const logHeadersFail: Partial<Record<string, string>> = {
        ...enabledHeaders,
      };

      void logRequest({
        method: snapshot.method,
        url: resolvedUrlStr,
        params: logParamsFail,
        headers: logHeadersFail,
        bodyMode: snapshot.body.mode,
        bodyPreview: resolvedBodyStr ?? '',
        statusCode: 0,
        statusText: msg || 'Request failed',
        timeMs,
        userId: user?.uid ?? null,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">
      <div className="h-[40vh] overflow-auto">
        <div className="flex items-center justify-end">
          <CodePanelSheet snapshot={lastSentSnapshot} />
        </div>

        <RequestEditor
          loading={loading}
          onSend={handleSend}
          onChange={emitChange}
          method={method}
        />
      </div>

      <div className="rounded-lg border border-pink-300/60 bg-pink-50/40">
        <div className="flex items-center justify-between px-4 py-2 border-b border-pink-300/60">
          <h2 className="font-semibold text-purple-700">Response</h2>
          {response && (
            <span className="text-xs text-purple-700/70">
              {response.statusCode} {response.statusText ?? ''}
            </span>
          )}
        </div>
        <div className="h-[40vh] p-3 overflow-auto">
          {response ? (
            <ResponseSection
              statusCode={response.statusCode}
              statusText={response.statusText}
              json={response.bodyText ?? ''}
              className="w-full"
            />
          ) : (
            <div className="h-full grid place-items-center text-sm opacity-70">
              Click send to get a response
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function hasHeader(h: Record<string, string>, key: string): boolean {
  const lower = key.toLowerCase();
  return Object.keys(h).some((k) => k.toLowerCase() === lower);
}
