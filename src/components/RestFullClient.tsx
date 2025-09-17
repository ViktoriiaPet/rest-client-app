import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RequestEditor from './RequestEditor';
import ResponseSection from './ResponseSection';

import type { HttpMethod } from '@/types/apiMethods';
import type { RequestSnapshot } from '@/types/restFullClient';
import type { JSX } from 'react';

import CodePanelSheet from '@/components/CodePanelSheet';
import { useAuth } from '@/context/AuthContext';
import { logRequest } from '@/utils/logRequest';
import { buildClientUrl } from '@/utils/restUrl';
import { applyVariables } from '@/utils/variables';

export type RestFullChangePayload = { method: HttpMethod; url: string };

export type RestFullClientProps = {
  method?: HttpMethod;
  onChange?(v: RestFullChangePayload): void;
};

type StringRecord = Record<string, string>;

function toRecord(
  rows: { enabled: boolean; key: string; value: string }[]
): StringRecord {
  return Object.fromEntries(
    rows.filter((r) => r.enabled && r.key).map((r) => [r.key, r.value])
  );
}

function hasHeader(headers: Record<string, string>, key: string): boolean {
  const needle = key.toLowerCase();
  return Object.keys(headers).some((k) => k.toLowerCase() === needle);
}

function getLsVars(uid: string | null | undefined): Record<string, string> {
  try {
    const raw = localStorage.getItem(`userVariables_${uid ?? ''}`);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === 'object') {
      return Object.fromEntries(
        Object.entries(parsed as Record<string, unknown>)
          .filter(([, v]) => typeof v === 'string')
          .map(([k, v]) => [k, v as string])
      );
    }
    return {};
  } catch {
    return {};
  }
}

export default function RestFullClient({
  method,
  onChange,
}: RestFullClientProps): JSX.Element {
  const { user } = useAuth();
  const navigate = useNavigate();

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

    const vars = getLsVars(user?.uid);
    const resolvedUrl = applyVariables(snapshot.url, vars);
    const resolvedBodyStr =
      snapshot.body.mode === 'json'
        ? applyVariables(snapshot.body.jsonText ?? '', vars)
        : snapshot.body.mode === 'raw'
          ? applyVariables(snapshot.body.rawText ?? '', vars)
          : undefined;

    const enabledParams: StringRecord = toRecord(snapshot.params);
    const enabledHeaders: StringRecord = toRecord(snapshot.headers);

    let requestUrl = resolvedUrl;
    try {
      const u = new URL(resolvedUrl);
      for (const [k, v] of Object.entries(enabledParams))
        u.searchParams.set(k, v);
      requestUrl = u.toString();
    } catch {
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

    const requestHeaders: StringRecord = { ...enabledHeaders };
    const canSendBody = !['GET', 'HEAD'].includes(snapshot.method);
    let requestBody: BodyInit | undefined;

    if (canSendBody) {
      switch (snapshot.body.mode) {
        case 'json': {
          if (!hasHeader(requestHeaders, 'content-type'))
            requestHeaders['Content-Type'] = 'application/json';
          requestBody = resolvedBodyStr ?? '';
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
          requestBody = form;
          break;
        }
        case 'raw': {
          requestBody = resolvedBodyStr ?? '';
          break;
        }
      }
    }

    let statusCode = 0;
    let statusText = '';
    let bodyText = '';
    let errorType: string | null = null;
    let errorMessage: string | null = null;

    try {
      const res = await fetch(requestUrl, {
        method: snapshot.method,
        headers: requestHeaders,
        body: requestBody,
      });
      statusCode = res.status;
      statusText = res.statusText;
      bodyText = await res.text();

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
            ? { jsonText: resolvedBodyStr ?? '' }
            : {}),
          ...(snapshot.body.mode === 'raw'
            ? { rawText: resolvedBodyStr ?? '' }
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
      void logRequest({
        method: snapshot.method,
        url: requestUrl,
        params: { ...enabledParams },
        headers: { ...requestHeaders },
        bodyMode: snapshot.body.mode,
        bodyPreview: resolvedBodyStr ?? '',
        latencyMs,
        statusCode,
        statusText,
        errorType,
        errorMessage,
        userId: user?.uid ?? null,
      });
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">
      <div className="h-[40vh] overflow-auto">
        <RequestEditor
          loading={loading}
          onSend={handleSend}
          onChange={emitChange}
          method={method}
        />
        <div className="flex items-center justify-end">
          <CodePanelSheet snapshot={lastSentSnapshot} />
        </div>
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
