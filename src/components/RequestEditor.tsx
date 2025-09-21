import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BodyModeSelector } from './BodyModeSelector';
import { KeyValueEditor } from './KeyValueEditor';
import RequestBar from './RequestBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Button } from '@/components/ui/button';

import type {
  BodyMode,
  KeyValueRow,
  RequestEditorProps,
  RequestSnapshot,
} from '@/types/restFullClient';
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
}: RequestEditorProps): React.JSX.Element {
  const { t } = useTranslation();

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

  useEffect(() => {
    setSelectedMethod(method);
  }, [method]);

  useEffect(() => {
    setRequestUrl(url);
  }, [url]);

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

  const urlInvalid = validateUrl && !isValidUrl(requestUrl);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (urlInvalid) return;
    onSend?.(snapshot);
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
        }}
        onSend={() => submit()}
      />

      <div className="px-1 h-4 ml-30">
        {urlInvalid && (
          <div className="px-1 text-[14px] text-rose-600">
            {t('request.invalidUrl')}
          </div>
        )}
      </div>

      <Tabs defaultValue="params" className="w-full">
        <TabsList className="bg-pink-50/40 p-1 rounded-xl">
          <TabsTrigger
            value="params"
            className="transition-colors data-[state=active]:bg-pink-300 data-[state=active]:text-purple-600"
          >
            {t('request.params')}
          </TabsTrigger>
          <TabsTrigger
            value="headers"
            className="transition-colors data-[state=active]:bg-pink-300 data-[state=active]:text-purple-600"
          >
            {t('request.headers')}
          </TabsTrigger>
          <TabsTrigger
            value="body"
            className="transition-colors data-[state=active]:bg-pink-300 data-[state=active]:text-purple-600"
          >
            {t('request.body')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="params" className="space-y-2">
          <KeyValueEditor
            rows={queryParams}
            onChange={setQueryParams}
            addLabel={t('request.addParam')}
          />
        </TabsContent>

        <TabsContent value="headers">
          <KeyValueEditor
            rows={requestHeaders}
            onChange={setRequestHeaders}
            addLabel={t('request.addHeader')}
          />
        </TabsContent>

        <TabsContent value="body" className="space-y-3">
          <BodyModeSelector value={mode} onChange={setMode} />

          {mode === 'json' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div
                  className={`text-[14px] ${jsonError ? 'text-rose-600' : 'text-slate-500'}`}
                >
                  {jsonError}
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md"
                    onClick={() => setJsonBody(prettifyJson(jsonBody))}
                    disabled={!!jsonError}
                  >
                    {t('buttons.prettify')}
                  </Button>
                </div>
              </div>

              <Textarea
                value={jsonBody}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setJsonBody(e.target.value)
                }
                placeholder='{"hello":"world"}'
                className="min-h-[180px] font-mono text-sm rounded-lg border border-pink-300/60 bg-pink-50/40"
              />
            </div>
          )}

          {mode === 'form-data' && (
            <KeyValueEditor
              rows={formRows}
              onChange={setFormRows}
              addLabel={t('request.addField')}
            />
          )}

          {mode === 'raw' && (
            <Textarea
              value={rawBody}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setRawBody(e.target.value)
              }
              placeholder={t('request.rawBody')}
              className="min-h-[140px] font-mono text-sm"
            />
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
