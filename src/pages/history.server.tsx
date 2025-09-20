import cookie from 'cookie';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  type QueryConstraint,
  type Timestamp,
  type DocumentData,
} from 'firebase/firestore';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

import { db } from '@/service/firebase';

type FireRequestDoc = {
  userId?: string | null;
  method?: string | null;
  url?: string | null;
  createdAt?: Timestamp | null;
  statusCode?: number | null;
  latencyMs?: number | null;
  bodyPreview?: string | null;
  headers?: Record<string, unknown> | null;
  params?: Record<string, unknown> | null;
  statusText?: string | null;
  bodyMode?: string | null;
  requestBytes: string | null;
  responseBytes: string | null;
};

type HistoryRow = {
  id: string;
  method: string;
  url: string;
  createdAt: Date | null;
  bodyMode: string;
  bodyPreview: string;
  headersRecord: Record<string, string>;
  paramsRecord: Record<string, string>;
  latencyMs: number | null;
  statusCode: number | null;
  statusText: string;
  lang: string;
  requestBytes: string | null;
  responseBytes: string | null;
};

type LoaderData = {
  token: string | null;
  history: HistoryRow[];
  userId: string | null;
  userName: string | null;
  lang: string;
};

type FirebaseTokenPayload = {
  user_id: string;
  name?: string;
  email?: string;
};

function parseJwt(token: string): FirebaseTokenPayload | null {
  try {
    const payload = token.split('.')[1];
    const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decoded) as FirebaseTokenPayload;
  } catch {
    return null;
  }
}

function b64EncodeUnicode(str: string): string {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    )
  );
}

function toBase64Json(value: unknown): string {
  return b64EncodeUnicode(JSON.stringify(value));
}

function toStringRecord(
  input?: Record<string, unknown> | null
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(input ?? {}).map(([key, val]) => [key, String(val)])
  );
}

export async function loader({
  request,
}: {
  request?: Request;
}): Promise<LoaderData> {
  const cookieHeader = request?.headers.get('cookie') ?? '';
  const cookies = cookie.parse(cookieHeader);
  const token = cookies.userToken ?? null;
  const lang = cookies.lang ?? 'en';

  let userId: string | null = null;
  let userName: string | null = null;

  if (token) {
    const decoded = parseJwt(token);
    if (decoded) {
      userId = decoded.user_id;
      userName = decoded.name ?? null;
    }
  }

  const colRef = collection(db, 'requests').withConverter<FireRequestDoc>({
    fromFirestore: (snap) => snap.data() as FireRequestDoc,
    toFirestore: (data: FireRequestDoc): DocumentData => ({ ...data }),
  });

  const constraints: QueryConstraint[] = [
    orderBy('createdAt', 'desc'),
    limit(userId ? 50 : 25),
  ];
  if (userId) constraints.unshift(where('userId', '==', userId));
  const snap = await getDocs(query(colRef, ...constraints));

  let history: HistoryRow[] = snap.docs.map((doc) => {
    const d = doc.data();
    return {
      id: doc.id,
      method: d.method ?? 'GET',
      url: d.url ?? '',
      createdAt: d.createdAt ? d.createdAt.toDate() : null,
      latencyMs: d.latencyMs ?? null,
      statusCode: d.statusCode ?? null,
      statusText: d.statusText ?? '',
      bodyMode: d.bodyMode ?? 'none',
      bodyPreview: d.bodyPreview ?? '',
      headersRecord: toStringRecord(d.headers),
      paramsRecord: toStringRecord(d.params),
      lang,
      requestBytes: d.requestBytes ?? null,
      responseBytes: d.responseBytes ?? null
    };
  });

  history = history
    .filter((row) => row.url)
    .sort(
      (a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0)
    );

  return { token, history, userId, userName, lang};
}

export function HistoryPageInner({ loaderData }: { loaderData: LoaderData }) {
  const t = (key: string) => {
    const dict: Record<string, Record<string, string>> = {
      en: {
        statusCode: 'Status Code',
        method: 'Method',
        url: 'URL',
        createdAt: 'Created At',
        duration: 'Request duration',
        error: 'Error information',
        requestMemory: "Размер запроса",
        responceMemory: "Размер ответа"
      },
      ru: {
        statusCode: 'Код ответа',
        method: 'Метод',
        url: 'Ссылка',
        createdAt: 'Создано',
        duration: 'Длительность запроса',
        error: 'Информация об ошибке',
        requestMemory: "Размер запроса",
        responceMemory: "Размер ответа"
      },
    };
    return dict[loaderData.lang]?.[key] ?? key;
  };

  return (
    <div className="overflow-x-auto">
      <table
        className="min-w-full border border-gray-300 rounded-md border-separate"
        style={{ borderSpacing: 0 }}
      >
        <thead className="bg-pink-300">
          <tr>
            <th className="px-4 py-2 border-b text-purple-800">
              {t('statusCode')}
            </th>
            <th className="px-4 py-2 border-b text-purple-800">
              {t('method')}
            </th>
            <th className="px-4 py-2 border-b text-purple-800">{t('url')}</th>
            <th className="px-4 py-2 border-b text-purple-800">
              {t('createdAt')}
            </th>
            <th className="px-4 py-2 border-b text-purple-800">
              {t('duration')}
            </th>
                        <th className="px-4 py-2 border-b text-purple-800">
              {t('requestMemory')}
            </th>
            <th className="px-4 py-2 border-b text-purple-800">
              {t('responceMemory')}
            </th>
            <th className="px-4 py-2 border-b text-purple-800">{t('error')}</th>
          </tr>
        </thead>
        <tbody>
          {loaderData.history.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-4 py-2 text-center text-gray-500">
                {loaderData.lang === 'ru'
                  ? 'История пока пуста.'
                  : 'No requests recorded yet.'}
              </td>
            </tr>
          ) : (
            loaderData.history.map((row) => {
              const prefill = {
                method: row.method,
                url: row.url,
                headers: row.headersRecord,
                params: row.paramsRecord,
                bodyMode: row.bodyMode,
                bodyText: row.bodyPreview,
              };
              const prefillEncoded = encodeURIComponent(toBase64Json(prefill));

              return (
                <tr key={row.id} className="hover:bg-amber-50">
                  <td className="px-4 py-2 border-b text-purple-600">
                    {row.statusCode}
                  </td>
                  <td className="px-4 py-2 border-b font-medium text-purple-600">
                    {row.method}
                  </td>
                  <td className="px-4 py-2 border-b text-purple-600">
                    <Link
                      to={{
                        pathname: '/auth/restfull',
                        search: `?prefill=${prefillEncoded}`,
                      }}
                      state={{ prefill }}
                      className="underline text-blue-600 truncate"
                      title={row.url}
                    >
                      {row.url}
                    </Link>
                  </td>
                  <td className="px-4 py-2 border-b text-purple-600">
                    {row.createdAt?.toISOString()}
                  </td>
                  <td className="px-4 py-2 border-b text-purple-600">
                    {row.latencyMs}
                  </td>
                                    <td className="px-4 py-2 border-b text-purple-600">
                    {row.responseBytes}
                  </td>
                                    <td className="px-4 py-2 border-b text-purple-600">
                    {row.requestBytes}
                  </td>
                  <td className="px-4 py-2 border-b text-purple-600">
                    {row.statusText}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

const LazyHistoryPage = lazy(async () => ({
  default: HistoryPageInner,
}));

export default function HistoryPage({
  loaderData,
}: {
  loaderData: LoaderData;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyHistoryPage loaderData={loaderData} />
    </Suspense>
  );
}
