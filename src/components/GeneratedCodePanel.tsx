import * as React from 'react';

import type { RequestSnapshot } from '@/types/restFullClient';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { buildHarFromSnapshot } from '@/utils/generatedCode';

export type TabKey =
  | 'cURL'
  | 'JavaScript (fetch)'
  | 'JavaScript (XHR)'
  | 'NodeJS'
  | 'Python'
  | 'Java'
  | 'C#'
  | 'Go';

export const TABS: TabKey[] = [
  'cURL',
  'JavaScript (fetch)',
  'JavaScript (XHR)',
  'NodeJS',
  'Python',
  'Java',
  'C#',
  'Go',
];

type HTTPSnippetInstance = {
  convert: (
    target: string,
    client: string,
    options?: unknown
  ) => string | null | undefined;
};
type HTTPSnippetCtor = new (har: unknown) => HTTPSnippetInstance;
type HTTPSnippetModule = { default: HTTPSnippetCtor };

export type SnippetState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | {
      status: 'ready';
      code: Partial<Record<TabKey, string>>;
      context: { method: string; url: string };
    };

export default function GeneratedCodePostman({
  snapshot,
  className = '',
}: {
  snapshot: RequestSnapshot;
  className?: string;
}) {
  const [state, setState] = React.useState<SnippetState>({ status: 'idle' });

  React.useEffect(() => {
    let urlObj: URL | null = null;

    try {
      urlObj = new URL(snapshot.url);
    } catch {
      setState({
        status: 'error',
        message: 'Not enough details: URL is missing or invalid.',
      });
      return;
    }

    for (const p of snapshot.params) {
      if (p.enabled && p.key) urlObj.searchParams.set(p.key, p.value);
    }

    setState({ status: 'loading' });

    void (async () => {
      try {
        const mod = (await import(
          'httpsnippet'
        )) as unknown as HTTPSnippetModule;
        const HTTPSnippet = mod.default;
        const har = buildHarFromSnapshot(snapshot, urlObj.toString());
        const snip = new HTTPSnippet(har);

        const codePairs: [TabKey, string | null | undefined][] = [
          [
            'cURL',
            snip.convert('shell', 'curl', { indent: '  ', short: false }),
          ],
          ['JavaScript (fetch)', snip.convert('javascript', 'fetch')],
          ['JavaScript (XHR)', snip.convert('javascript', 'xhr')],
          ['NodeJS', snip.convert('node', 'native')],
          ['Python', snip.convert('python', 'requests')],
          ['Java', snip.convert('java', 'okhttp')],
          ['C#', snip.convert('csharp', 'httpclient')],
          ['Go', snip.convert('go', 'native')],
        ];

        const code: Partial<Record<TabKey, string>> = {};
        for (const [k, v] of codePairs) if (v) code[k] = v;

        setState({
          status: 'ready',
          code,
          context: { method: snapshot.method, url: urlObj.toString() },
        });
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        setState({
          status: 'error',
          message: msg || 'Failed to generate code.',
        });
      }
    })();
  }, [snapshot]);

  const copy = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
  };

  return (
    <section className={`rounded-xl border bg-white ${className}`}>
      <div className="flex items-center justify-between gap-2 border-b px-4 py-2">
        <h3 className="text-sm font-semibold">Generated code</h3>
        {state.status === 'ready' && (
          <span className="text-xs text-slate-500">
            {state.context.method} • {state.context.url}
          </span>
        )}
      </div>

      {state.status === 'loading' && (
        <div className="p-4 text-sm text-slate-600">Generating snippets…</div>
      )}

      {state.status === 'error' && (
        <div className="p-4 text-sm text-rose-600">{state.message}</div>
      )}

      {state.status === 'ready' && (
        <Tabs defaultValue={TABS[0]} className="w-full">
          <TabsList className="m-3 flex flex-wrap">
            {TABS.map((t) => (
              <TabsTrigger key={t} value={t} disabled={!state.code[t]}>
                {t}
              </TabsTrigger>
            ))}
          </TabsList>

          {TABS.map((t) => (
            <TabsContent key={t} value={t} className="px-3 pb-3">
              {!state.code[t] ? (
                <div className="px-2 py-4 text-sm text-slate-500">
                  Not available for this request.
                </div>
              ) : (
                <>
                  <div className="mb-2 flex items-center justify-end">
                    {(() => {
                      const snippet = state.code[t];
                      return (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            if (snippet) void copy(snippet);
                          }}
                        >
                          Copy
                        </Button>
                      );
                    })()}
                  </div>
                  <pre className="overflow-auto rounded-lg border bg-slate-50 p-3 text-xs">
                    {state.code[t]}
                  </pre>
                </>
              )}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </section>
  );
}
