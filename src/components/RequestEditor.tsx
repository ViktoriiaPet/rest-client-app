import React, { useEffect, useMemo, useState } from 'react';

import { BodyModeSelector } from './BodyModeSelector';
import { KeyValueEditor } from './KeyValueEditor';
import RequestBar from './RequestBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';

import type {
  BodyMode,
  KeyValueRow,
  RequestEditorProps,
  RequestSnapshot,
} from '@/types/restFullClient';

import { Button } from '@/components/ui/button';
import { DEFAULT_METHODS, type HttpMethod } from '@/types/apiMethods';
import {
  withIds,
  isValidUrl,
  validateJson,
  prettifyJson,
} from '@/utils/requestEditor';

export default function RequestEditor({
  method = 'GET',
  url = '',
  params = [],
  headers = [],
  bodyMode = 'none',
  jsonText = '',
  formData = [],
  rawText = '',
  methods = DEFAULT_METHODS,
  loading = false,
  validateUrl = true,
  className = '',
  onChange,
  onSend,
}: RequestEditorProps) {
  const [selectedMethod, setSelectedMethod] = useState<HttpMethod>(method);
  const [requestUrl, setRequestUrl] = useState(url);
  const [queryParams, setQueryParams] = useState<KeyValueRow[]>(
    withIds(params)
  );
  const [requestHeaders, setRequestHeaders] = useState<KeyValueRow[]>(
    withIds(headers)
  );
  const [mode, setMode] = useState<BodyMode>(bodyMode);
  const [jsonBody, setJsonBody] = useState(jsonText);
  const [formRows, setFormRows] = useState<KeyValueRow[]>(withIds(formData));
  const [rawBody, setRawBody] = useState(rawText);
  const [hasTypedUrl, setHasTypedUrl] = useState(false);

  useEffect(() => {
    setSelectedMethod(method);
  }, [method]);
  useEffect(() => {
    setRequestUrl(url);
  }, [url]);

  const isUrlValid = useMemo(() => {
    if (!validateUrl || !hasTypedUrl) return true;
    return isValidUrl(requestUrl);
  }, [requestUrl, hasTypedUrl, validateUrl]);

  const jsonError = useMemo(() => validateJson(jsonBody), [jsonBody]);

  const snapshot = useMemo<RequestSnapshot>(
    () => ({
      method: selectedMethod,
      url: requestUrl,
      params: queryParams,
      headers: requestHeaders,
      body: { mode, jsonText: jsonBody, formData: formRows, rawText: rawBody },
    }),
    [
      selectedMethod,
      requestUrl,
      queryParams,
      requestHeaders,
      mode,
      jsonBody,
      formRows,
      rawBody,
    ]
  );

  useEffect(() => {
    onChange?.(snapshot);
  }, [snapshot, onChange]);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onSend?.(snapshot);
    console.log('🚀 ~ submit ~ snapshot:', snapshot);
  };

  return (
    <section className={`w-full space-y-3 ${className}`}>
      <RequestBar
        method={selectedMethod}
        url={requestUrl}
        methods={methods}
        loading={loading}
        validateUrl={validateUrl}
        onChange={({ method, url }) => {
          setSelectedMethod(method);
          setRequestUrl(url);
          setHasTypedUrl(true);
        }}
        onSend={() => {
          submit();
        }}
      />

      <Tabs defaultValue="params" className="w-full">
        <TabsList>
          <TabsTrigger value="params">Params</TabsTrigger>
          <TabsTrigger value="headers">Headers</TabsTrigger>
          <TabsTrigger value="body">Body</TabsTrigger>
        </TabsList>

        <TabsContent value="params" className="space-y-2">
          <KeyValueEditor
            rows={queryParams}
            onChange={setQueryParams}
            addLabel="Add param"
          />
        </TabsContent>

        <TabsContent value="headers">
          <KeyValueEditor
            rows={requestHeaders}
            onChange={setRequestHeaders}
            addLabel="Add header"
          />
        </TabsContent>

        <TabsContent value="body" className="space-y-3">
          <BodyModeSelector value={mode} onChange={setMode} />

          {mode === 'json' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div
                  className={`text-xs ${jsonError ? 'text-rose-600' : 'text-slate-500'}`}
                >
                  {jsonError ? jsonError : 'Valid JSON'}
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setJsonBody(prettifyJson(jsonBody));
                    }}
                    disabled={!!jsonError}
                  >
                    Prettify
                  </Button>
                </div>
              </div>

              <Textarea
                value={jsonBody}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setJsonBody(e.target.value);
                }}
                placeholder='{"hello":"world"}'
                className="min-h-[180px] font-mono text-sm rounded-lg border border-pink-300/60 bg-pink-50/40"
              />
            </div>
          )}

          {mode === 'form-data' && (
            <KeyValueEditor
              rows={formRows}
              onChange={setFormRows}
              addLabel="Add field"
            />
          )}

          {mode === 'raw' && (
            <Textarea
              value={rawBody}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setRawBody(e.target.value);
              }}
              placeholder="Raw body"
              className="min-h-[140px] font-mono text-sm"
            />
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
