import {
  LANGS,
  TARGETS,
  type HTTPSnippetCtor,
  type RequestSnapshot,
  type KeyValueRow,
  type TabKey,
} from '@/types/restFullClient';

export type HarNameValue = { name: string; value: string };
export type HarPostParam = { name: string; value: string; fileName?: string };
export type HarPostData = {
  mimeType?: string;
  text?: string;
  params?: HarPostParam[];
};
export type HarRequest = {
  method: string;
  url: string;
  httpVersion: string;
  headers: HarNameValue[];
  queryString: HarNameValue[];
  postData?: HarPostData;
};
export type CodeByLang = Partial<Record<TabKey, string>>;

export function buildUrl(snapshot: RequestSnapshot): string | null {
  try {
    const url = new URL(snapshot.url);
    for (const p of snapshot.params ?? [])
      if (p.enabled && p.key) url.searchParams.set(p.key, p.value);
    return url.toString();
  } catch {
    return null;
  }
}

type HttpsnippetModuleLike = {
  HTTPSnippet?: HTTPSnippetCtor;
  default?: HTTPSnippetCtor;
};

function isHttpsnippetModule(mod: unknown): mod is HttpsnippetModuleLike {
  if (typeof mod !== 'object' || mod === null) return false;
  const rec = mod as Record<string, unknown>;
  const candidate = (rec.HTTPSnippet ?? rec.default) as unknown;
  return typeof candidate === 'function';
}

async function loadHttpsnippetCtor(): Promise<HTTPSnippetCtor> {
  const mod = (await import('httpsnippet-lite')) as unknown;
  if (!isHttpsnippetModule(mod))
    throw new Error('Invalid httpsnippet-lite module');
  return (mod.HTTPSnippet ?? mod.default)!;
}

function toNameValue(rows: KeyValueRow[]): HarNameValue[] {
  return rows
    .filter((r) => r.enabled && !!r.key)
    .map((r) => ({ name: r.key, value: r.value }));
}

function contentTypeForRaw(snapshot: RequestSnapshot): string {
  const ct = snapshot.headers.find(
    (h) => h.enabled && h.key.toLowerCase() === 'content-type'
  )?.value;
  return ct ?? 'text/plain; charset=utf-8';
}

export function buildHarFromSnapshot(
  snapshot: RequestSnapshot,
  url: string
): HarRequest {
  const method = snapshot.method.toUpperCase();
  const canSendBody = method !== 'GET' && method !== 'HEAD';
  let postData: HarPostData | undefined;

  if (canSendBody && snapshot.body.mode !== 'none') {
    if (snapshot.body.mode === 'json') {
      postData = {
        mimeType: 'application/json',
        text: snapshot.body.jsonText ?? '',
      };
    } else if (snapshot.body.mode === 'form-data') {
      const params = (snapshot.body.formData ?? [])
        .filter((r) => r.enabled && !!r.key)
        .map((r) => ({ name: r.key, value: r.value }));
      postData = { mimeType: 'multipart/form-data', params };
    } else if (snapshot.body.mode === 'raw') {
      postData = {
        mimeType: contentTypeForRaw(snapshot),
        text: snapshot.body.rawText ?? '',
      };
    }
  }

  return {
    method,
    url,
    httpVersion: 'HTTP/1.1',
    headers: toNameValue(snapshot.headers),
    queryString: toNameValue(snapshot.params),
    postData,
  };
}

export async function generateSnippets(
  snapshot: RequestSnapshot,
  finalUrl: string
): Promise<CodeByLang> {
  const HTTPSnippet = await loadHttpsnippetCtor();
  const instance = new HTTPSnippet(buildHarFromSnapshot(snapshot, finalUrl));
  const entries = await Promise.all(
    LANGS.map(async (lang) => {
      const [target, client, opts] = TARGETS[lang];
      const out = await instance.convert(target, client, opts);
      return [lang, typeof out === 'string' ? out : undefined] as const;
    })
  );
  const code: CodeByLang = {};
  for (const [key, value] of entries) if (value) code[key] = value;
  return code;
}

export function firstAvailableLanguage(code: CodeByLang): TabKey | null {
  return LANGS.find((l) => !!code[l]) ?? null;
}
