import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from './ui/button';
import { badgeColor } from '../utils/getStatusCodeColor';

type ResponseSectionProps = {
  statusCode: number;
  statusText?: string;
  json?: string;
  className?: string;
};

export default function ResponseSection({
  statusCode,
  statusText,
  json,
  className = '',
}: ResponseSectionProps) {
  const { t } = useTranslation();
  const prettyJson = useMemo(() => {
    if (!json) return '';

    try {
      return JSON.stringify(JSON.parse(json), null, 2);
    } catch {
      return json;
    }
  }, [json]);

  const copy = async (): Promise<void> => {
    await navigator.clipboard.writeText(prettyJson);
  };

  return (
    <section
      className={`w-full flex-1 min-w-0 self-stretch rounded-xl border bg-white overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between gap-3 border-b bg-white px-4 py-2">
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold text-white ${badgeColor(
              statusCode
            )}`}
          >
            {statusCode}
          </span>
          <span
            className="text-sm text-slate-700 truncate"
            title={statusText ?? ''}
          >
            {statusText ?? ''}
          </span>
        </div>
        <Button variant="custom" type="button" onClick={copy}>
          {t('request.copyJSON')}
        </Button>
      </div>

      <pre className="m-0 max-h-[60vh] overflow-auto p-4 text-sm leading-6 whitespace-pre">
        {prettyJson || '(empty)'}
      </pre>
    </section>
  );
}
