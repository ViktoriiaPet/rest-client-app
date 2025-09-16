import type { HttpMethod } from '@/types/apiMethods';

export type KeyValueRow = {
  id: string;
  enabled: boolean;
  key: string;
  value: string;
};
export type BodyMode = 'none' | 'json' | 'form-data' | 'raw';

export type RequestBody = {
  mode: BodyMode;
  jsonText?: string;
  formData?: KeyValueRow[];
  rawText?: string;
};

export type RequestSnapshot = {
  method: HttpMethod;
  url: string;
  params: KeyValueRow[];
  headers: KeyValueRow[];
  body: RequestBody;
};

export type RequestEditorProps = {
  method?: HttpMethod;
  url?: string;
  params?: KeyValueRow[];
  headers?: KeyValueRow[];
  bodyMode?: BodyMode;
  jsonText?: string;
  formData?: KeyValueRow[];
  rawText?: string;

  methods?: HttpMethod[];
  loading?: boolean;
  validateUrl?: boolean;
  className?: string;
  sendLabel?: string;

  onChange?(snapshot: RequestSnapshot): void;
  onSend?(snapshot: RequestSnapshot): void;
};

export type RequestBarProps = {
  method?: HttpMethod;
  url?: string;
  methods?: HttpMethod[];
  loading?: boolean;
  validateUrl?: boolean;
  className?: string;

  onChange?(v: { method: HttpMethod; url: string }): void;
  onSend?(v: { method: HttpMethod; url: string }): void;
};

export type KeyValueEditorProps = {
  rows: KeyValueRow[];
  addLabel: string;

  onChange: (rows: KeyValueRow[]) => void;
};

export type RestFullChangePayload = {
  method: HttpMethod;
  url: string;
};

export type RestFullClientProps = {
  method?: HttpMethod;
  onChange?(v: RestFullChangePayload): void;
};

export type TabKey =
  | 'cURL'
  | 'JavaScript (fetch)'
  | 'JavaScript (XHR)'
  | 'NodeJS'
  | 'Python'
  | 'Java'
  | 'C#'
  | 'Go';

export const LANGS: TabKey[] = [
  'cURL',
  'JavaScript (fetch)',
  'JavaScript (XHR)',
  'NodeJS',
  'Python',
  'Java',
  'C#',
  'Go',
];

export const TARGETS: Record<
  TabKey,
  readonly [string, string | undefined, Record<string, unknown>?]
> = {
  cURL: ['shell', 'curl', { indent: '  ', short: false }],
  'JavaScript (fetch)': ['javascript', 'fetch'],
  'JavaScript (XHR)': ['javascript', 'xhr'],
  NodeJS: ['node', 'native'],
  Python: ['python', 'requests'],
  Java: ['java', 'okhttp'],
  'C#': ['csharp', 'httpclient'],
  Go: ['go', 'native'],
};

export type SnippetState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | {
      status: 'ready';
      code: Partial<Record<TabKey, string>>;
      context: { method: string; url: string };
    };

export type SnippetConvertFn = (
  target: string,
  client?: string,
  options?: Readonly<Record<string, unknown>>
) => Promise<string | null | undefined>;

export interface HTTPSnippetLike {
  convert: SnippetConvertFn;
}

export type HTTPSnippetCtor = new (har: unknown) => HTTPSnippetLike;

export type HTTPSnippetLiteModule =
  | { HTTPSnippet: HTTPSnippetCtor }
  | { default: HTTPSnippetCtor };
