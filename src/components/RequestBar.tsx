import { Loader2 } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from './ui/select';

import { DEFAULT_METHODS, type HttpMethod } from '@/types/apiMethods';
import { getMethodTextColor } from '@/utils/getStatusCodeColor';

type RequestBarProps = {
  method?: HttpMethod;
  url?: string;
  methods?: HttpMethod[];
  loading?: boolean;
  validateUrl?: boolean;
  className?: string;

  onChange?(v: { method: HttpMethod; url: string }): void;
  onSend?(v: { method: HttpMethod; url: string }): void;
};

export default function RequestBar({
  method = 'GET',
  url = '',
  methods = DEFAULT_METHODS,
  loading = false,
  validateUrl = true,
  className = '',
  onChange,
  onSend,
}: RequestBarProps) {
  const { t } = useTranslation();
  const [selectedMethod, setSelectedMethod] = useState<HttpMethod>(method);
  const [requestUrl, setRequestUrl] = useState<string>(url);
  const [hasUserTyped, setHasUserTyped] = useState(false);

  useEffect(() => {
    setSelectedMethod(method);
  }, [method]);
  useEffect(() => {
    setRequestUrl(url);
  }, [url]);

  const isValidUrl = (value: string): boolean => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const isUrlValid = useMemo(() => {
    if (!validateUrl || !hasUserTyped) return true;
    return isValidUrl(requestUrl);
  }, [requestUrl, hasUserTyped, validateUrl]);

  const handleSubmit = (e?: React.FormEvent): void => {
    e?.preventDefault();
    onSend?.({ method: selectedMethod, url: requestUrl });
  };

  const handleMethodChange = (value: string): void => {
    const nextMethod = value as HttpMethod;
    setSelectedMethod(nextMethod);
    onChange?.({ method: nextMethod, url: requestUrl });
  };

  const handleUrlChange = (value: string): void => {
    if (!hasUserTyped) setHasUserTyped(true);
    setRequestUrl(value);
    onChange?.({ method: selectedMethod, url: value });
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="w-full flex items-center gap-2">
        <Select
          value={selectedMethod}
          disabled={loading}
          onValueChange={handleMethodChange}
        >
          <SelectTrigger className="w-[128px]">
            <div
              className={`flex items-center gap-2 ${getMethodTextColor(selectedMethod)}`}
            >
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent className="z-50">
            {methods.map((methodOption) => (
              <SelectItem key={methodOption} value={methodOption}>
                <div className="flex items-center gap-2">
                  <span className={getMethodTextColor(methodOption)}>
                    {methodOption}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder="https://api.example.com/endpoint"
          value={requestUrl}
          disabled={loading}
          onChange={(e) => {
            handleUrlChange(e.target.value);
          }}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'enter')
              handleSubmit();
          }}
          className={`flex-1 ${isUrlValid ? '' : 'border-rose-400 focus-visible:ring-rose-300'}`}
        />

        <Button type="submit" disabled={loading || !isUrlValid}>
          {!!loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {t('buttons.send')}
        </Button>
      </div>
    </form>
  );
}
