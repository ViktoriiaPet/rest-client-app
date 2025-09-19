import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
  LANGS,
  TARGETS,
  type HTTPSnippetCtor,
  type HTTPSnippetLiteModule,
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
import { buildHarFromSnapshot } from '@/utils/generatedCode';

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

  React.useEffect(() => {
    let urlObj: URL;
    try {
      urlObj = new URL(snapshot.url);
    } catch {
      setState({ status: 'error', message: t('restfull.urlInvalid') });
      return;
    }

    for (const p of snapshot.params ?? []) {
      if (p.enabled && p.key) urlObj.searchParams.set(p.key, p.value);
    }

    setState({ status: 'loading' });

    (async () => {
      try {
        const mod = (await import(
          'httpsnippet-lite'
        )) as unknown as HTTPSnippetLiteModule;
        const HTTPSnippet: HTTPSnippetCtor =
          'HTTPSnippet' in mod ? mod.HTTPSnippet : mod.default;
        const har = buildHarFromSnapshot(snapshot, urlObj.toString());
        const snip = new HTTPSnippet(har);

        const results = await Promise.all(
          LANGS.map(async (lang) => {
            const [target, client, opts] = TARGETS[lang];
            const out = await snip.convert(target, client, opts);
            return [lang, typeof out === 'string' ? out : undefined] as const;
          })
        );

        const code: Partial<Record<TabKey, string>> = {};
        for (const [key, value] of results) if (value) code[key] = value;

        setState({
          status: 'ready',
          code,
          context: { method: snapshot.method, url: urlObj.toString() },
        });

        const first = LANGS.find((lang) => !!code[lang]) ?? null;
        setSelected(first);
      } catch {
        setState({ status: 'error', message: t('restfull.genFailed') });
      }
    })();
  }, [snapshot, t]);

  const copy = async (text: string): Promise<void> => {
    await navigator.clipboard.writeText(text);
  };

  const currentSnippet =
    state.status === 'ready' && selected ? state.code[selected] : undefined;

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
              {LANGS.map((lang) => {
                const disabled = !state.code[lang];
                return (
                  <SelectItem key={lang} value={lang} disabled={disabled}>
                    {lang}
                  </SelectItem>
                );
              })}
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
                  onClick={() => void copy(currentSnippet)}
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
