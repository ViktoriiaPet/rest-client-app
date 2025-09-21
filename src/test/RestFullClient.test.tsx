import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import RestFullClient from '@/components/RestFullClient';
import type { BodyMode, RequestSnapshot } from '@/types/restFullClient';

const tMock = (k: string) => k;

vi.mock('react-i18next', () => ({ useTranslation: () => ({ t: tMock }) }));

const navigateMock = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
  useLocation: () => ({ state: {} }),
  useSearchParams: () => [new URLSearchParams(), vi.fn()],
}));

vi.mock('@/context/AuthContext', () => ({
  useAuth: () => ({ user: { uid: 'u1' } }),
}));

const logRequestMock = vi.fn();
vi.mock('@/utils/logRequest', () => ({
  logRequest: (...a: unknown[]) => logRequestMock(...a),
}));

vi.mock('@/utils/variables', () => ({
  applyVariables: (s: string) => s,
  getLSVars: () => ({}),
}));

const normalizeMethodMock = vi.fn();
const recToRowsMock = vi.fn();
const mergeQueryParamsMock = vi.fn();
const ensureContentTypeMock = vi.fn();
const buildRequestBodyMock = vi.fn();
const computeRequestByteSizesMock = vi.fn();
const resolveBodyTextMock = vi.fn();
const headersToRecordMock = vi.fn();
const headersBytesTotalFromRecordMock = vi.fn();
const utf8BytesMock = vi.fn();
const fromB64JSONMock = vi.fn();

vi.mock('@/utils/restfull', () => ({
  normalizeMethod: (...a: unknown[]) => normalizeMethodMock(...a),
  recToRows: (...a: unknown[]) => recToRowsMock(...a),
  mergeQueryParams: (...a: unknown[]) => mergeQueryParamsMock(...a),
  ensureContentType: (...a: unknown[]) => ensureContentTypeMock(...a),
  buildRequestBody: (...a: unknown[]) => buildRequestBodyMock(...a),
  computeRequestByteSizes: (...a: unknown[]) =>
    computeRequestByteSizesMock(...a),
  resolveBodyText: (...a: unknown[]) => resolveBodyTextMock(...a),
  headersToRecord: (...a: unknown[]) => headersToRecordMock(...a),
  headersBytesTotalFromRecord: (...a: unknown[]) =>
    headersBytesTotalFromRecordMock(...a),
  utf8Bytes: (...a: unknown[]) => utf8BytesMock(...a),
  fromB64JSON: (...a: unknown[]) => fromB64JSONMock(...a),
  buildClientUrl: ({ method, url }: { method: string; url: string }) =>
    `/auth/restfull?m=${encodeURIComponent(method)}&u=${encodeURIComponent(url)}`,
  toRecord: (rows: Array<{ enabled: boolean; key: string; value: string }>) =>
    Object.fromEntries(
      rows.filter((r) => r.enabled && r.key).map((r) => [r.key, r.value])
    ),
}));

const requestEditorSendSnapshot: RequestSnapshot = {
  method: 'GET',
  url: 'https://api.example.com/echo',
  params: [],
  headers: [],
  body: { mode: 'none' as BodyMode, jsonText: '', formData: [], rawText: '' },
};

vi.mock('@/components/RequestEditor', () => ({
  __esModule: true,
  default: (props: {
    onSend: (s: RequestSnapshot) => void;
    onChange: (p: { method: string; url: string }) => void;
  }) => (
    <div>
      <button onClick={() => props.onSend(requestEditorSendSnapshot)}>
        send
      </button>
      <button onClick={() => props.onChange({ method: 'GET', url: '' })}>
        change
      </button>
    </div>
  ),
}));

vi.mock('@/components/ResponseSection', () => ({
  __esModule: true,
  default: (p: { statusCode: number; statusText?: string; json: string }) => (
    <div data-testid="resp">
      {p.statusCode} {p.statusText} || {p.json}
    </div>
  ),
}));

vi.mock('@/components/CodePanelSheet', () => ({
  __esModule: true,
  default: () => null,
}));

beforeEach(() => {
  vi.clearAllMocks();
  normalizeMethodMock.mockImplementation((m?: string) =>
    m ? m.toUpperCase() : 'GET'
  );
  recToRowsMock.mockImplementation((rec?: Record<string, string>) =>
    Object.entries(rec ?? {}).map(([k, v]) => ({
      id: k,
      enabled: true,
      key: k,
      value: String(v),
    }))
  );
  fromB64JSONMock.mockReturnValue(undefined);
  ensureContentTypeMock.mockImplementation((h: Record<string, string>) => h);
  buildRequestBodyMock.mockReturnValue(undefined);
  computeRequestByteSizesMock.mockResolvedValue({
    finalHeaders: {},
    requestBodyBytes: 0,
    requestHeadersBytes: 0,
    requestBytes: 0,
  });
  resolveBodyTextMock.mockReturnValue('');
  headersToRecordMock.mockImplementation((h: Headers) =>
    Object.fromEntries(h.entries())
  );
  headersBytesTotalFromRecordMock.mockReturnValue(0);
  utf8BytesMock.mockImplementation(
    (s: string) => new TextEncoder().encode(s).length
  );
  Object.defineProperty(global, 'fetch', {
    configurable: true,
    value: vi.fn(),
  });
  logRequestMock.mockResolvedValue(undefined);
});

describe('RestFullClient', () => {
  it('shows placeholder before request', () => {
    render(<RestFullClient method="GET" onChange={() => {}} />);
    expect(screen.getByText('restfull.noResponse')).toBeInTheDocument();
  });

  it('handles invalid url', async () => {
    mergeQueryParamsMock.mockReturnValueOnce(null);
    render(<RestFullClient method="GET" onChange={() => {}} />);
    fireEvent.click(screen.getByText('send'));
    expect(fetch).not.toHaveBeenCalled();
  });

  it('sends request, renders response and logs', async () => {
    mergeQueryParamsMock.mockReturnValueOnce('https://final.example.com/x');
    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      status: 200,
      statusText: 'OK',
      headers: new Headers({ 'x-h': 'v' }),
      text: vi.fn().mockResolvedValue('{"ok":true}'),
    });
    render(<RestFullClient method="GET" onChange={() => {}} />);
    fireEvent.click(screen.getByText('send'));
    expect(await screen.findByText('200 OK')).toBeInTheDocument();
    expect(screen.getByTestId('resp')).toHaveTextContent('{"ok":true}');
    expect(navigateMock).toHaveBeenCalledTimes(1);
    const payload = logRequestMock.mock.calls[0][0] as {
      url: string;
      statusCode: number;
      responseBodyBytes: number;
    };
    expect(payload.url).toBe('https://final.example.com/x');
    expect(payload.statusCode).toBe(200);
    expect(payload.responseBodyBytes).toBe(
      new TextEncoder().encode('{"ok":true}').length
    );
  });
});
