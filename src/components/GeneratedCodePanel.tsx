import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
  LANGS,
  type RequestSnapshot,
  type SnippetState,
  type TabKey,
} from '@/types/restFullClient';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {
  buildUrl,
  generateSnippets,
  firstAvailableLanguage,
} from '@/utils/generatedCode';

export default function GeneratedCodePanel({
  snapshot,
  className = '',
}: {
  snapshot: RequestSnapshot;
  className?: string;
}): React.JSX.Element {
  const { t } = useTranslation();
  const [state, setState] = React.useState<SnippetState>({ status: 'idle' });
  const [selected, setSelected] = React.useState<TabKey | null>(null);

  const finalUrl = React.useMemo(() => buildUrl(snapshot), [snapshot]);

  React.useEffect(() => {
    if (!finalUrl) {
      setState({ status: 'error', message: t('restfull.urlInvalid') });
      return;
    }
    setState({ status: 'loading' });
    generateSnippets(snapshot, finalUrl)
      .then((code) => {
        const first = firstAvailableLanguage(code);
        setState({
          status: 'ready',
          code,
          context: { method: snapshot.method, url: finalUrl },
        });
        setSelected(first);
      })
      .catch(() =>
        setState({ status: 'error', message: t('restfull.genFailed') })
      );
  }, [snapshot, finalUrl, t]);

  const currentSnippet =
    state.status === 'ready' && selected ? state.code[selected] : undefined;

  const copy = React.useCallback(async (text: string): Promise<void> => {
    await navigator.clipboard.writeText(text);
  }, []);

  return (
    <section className={`rounded-xl border bg-white ${className}`}>
      <div className="flex items-center justify-between gap-2 border-b px-4 py-2">
        <h3 className="text-sm font-semibold">{t('restfull.generatedCode')}</h3>
        {state.status === 'ready' && (
          <span className="text-xs text-slate-500">
            {state.context.method} • {state.context.url}
          </span>
        )}
      </div>

      {state.status === 'loading' && (
        <div className="p-4 text-sm text-slate-600">
          {t('restfull.generating')}
        </div>
      )}

      {state.status === 'error' && (
        <div className="p-4 text-sm text-rose-600">{state.message}</div>
      )}

      {state.status === 'ready' && (
        <div className="p-3 space-y-3">
          <Select
            value={selected ?? undefined}
            onValueChange={(v: string) => setSelected(v as TabKey)}
          >
            <SelectTrigger className="w-full sm:w-72">
              <SelectValue placeholder={t('restfull.chooseLanguage')} />
            </SelectTrigger>
            <SelectContent>
              {LANGS.map((lang) => (
                <SelectItem
                  key={lang}
                  value={lang}
                  disabled={!state.code[lang]}
                >
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {!currentSnippet ? (
            <div className="px-2 py-6 text-sm text-slate-500 border rounded-lg">
              {t('restfull.notAvailable')}
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-500">{selected}</div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copy(currentSnippet)}
                >
                  {t('buttons.copy')}
                </Button>
              </div>
              <pre className="overflow-auto rounded-lg border bg-slate-50 p-3 text-xs">
                {currentSnippet}
              </pre>
            </>
          )}
        </div>
      )}
    </section>
  );
}
