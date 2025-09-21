import cookie from 'cookie';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { serverOnly$ } from 'vite-env-only/macros';
import { db } from '@/service/firebase';

type FireRequestDoc = {
  userId?: string | null;
  method?: string | null;
  url?: string | null;
  createdAt?: Date;
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

const parseJwt = (token: string) => {
  try {
    return JSON.parse(
      atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))
    );
  } catch {
    return null;
  }
};

const toBase64Json = (value: unknown) =>
  btoa(
    encodeURIComponent(JSON.stringify(value)).replace(
      /%([0-9A-F]{2})/g,
      (_, h) => String.fromCharCode(parseInt(h, 16))
    )
  );

const toStringRecord = (obj?: Record<string, unknown> | null) =>
  Object.fromEntries(Object.entries(obj ?? {}).map(([k, v]) => [k, String(v)]));

const translations = {
  en: {
    status: 'Status Code',
    method: 'Method',
    url: 'URL',
    created: 'Created At',
    duration: 'Duration',
    reqSize: 'Request size',
    resSize: 'Response size',
    error: 'Error info',
    empty: 'No requests recorded yet.',
  },
  ru: {
    status: 'Код статуса',
    method: 'Метод',
    url: 'Ссылка',
    created: 'Создано',
    duration: 'Длительность',
    reqSize: 'Размер запроса',
    resSize: 'Размер ответа',
    error: 'Информация об ошибке',
    empty: 'Записей пока нет.',
  },
} as const;

export const loader = serverOnly$(
  async ({ request }: { request?: Request }) => {
    const cookies = cookie.parse(request?.headers.get('cookie') ?? '');
    const token = cookies.userToken ?? null;
    const userId = token ? parseJwt(token)?.user_id : null;

    const cookieLang = cookies.lang;
    const headerLang = request?.headers.get('accept-language')?.split(',')[0];
    const lang =
      (cookieLang && (cookieLang === 'ru' ? 'ru' : 'en')) ||
      (headerLang?.startsWith('ru') ? 'ru' : 'en');
    const t = translations[lang];

    const snap = await getDocs(
      query(
        collection(db, 'requests').withConverter<FireRequestDoc>({
          fromFirestore: (s) => s.data() as FireRequestDoc,
          toFirestore: (d) => ({ ...d }),
        }),
        ...(userId ? [where('userId', '==', userId)] : []),
        orderBy('createdAt', 'desc'),
        limit(userId ? 50 : 25)
      )
    );

    const rowsHtml =
      snap.docs
        .map((doc) => {
          const d = doc.data();
          const prefill = {
            method: d.method ?? 'GET',
            url: d.url ?? '',
            headers: toStringRecord(d.headers),
            params: toStringRecord(d.params),
            bodyMode: d.bodyMode ?? 'none',
            bodyText: d.bodyPreview ?? '',
          };
          const href = `/auth/restfull?prefill=${encodeURIComponent(toBase64Json(prefill))}`;
          return `
      <tr class="hover:bg-amber-50">
        <td class="px-4 py-2 border-b text-purple-600">${d.statusCode ?? ''}</td>
        <td class="px-4 py-2 border-b font-medium text-purple-600">${d.method ?? ''}</td>
        <td class="px-4 py-2 border-b text-purple-600">
          <a href="${href}" title="${d.url ?? ''}" class="underline text-blue-600 truncate">${d.url ?? ''}</a>
        </td>
                <td class="px-4 py-2 border-b text-purple-600">${
                  d.createdAt
                    ? d.createdAt instanceof Date
                      ? d.createdAt.toISOString()
                      : ((d.createdAt as { toDate?: () => Date })
                          .toDate?.()
                          ?.toISOString() ?? '')
                    : ''
                }</td>
        <td class="px-4 py-2 border-b text-purple-600">${d.latencyMs ?? ''}</td>
        <td class="px-4 py-2 border-b text-purple-600">${d.requestBytes ?? ''}</td>
        <td class="px-4 py-2 border-b text-purple-600">${d.responseBytes ?? ''}</td>
        <td class="px-4 py-2 border-b text-purple-600">${d.statusText ?? ''}</td>
      </tr>
    `;
        })
        .join('') ||
      `<tr><td colspan="8" class="px-4 py-2 text-center text-gray-500">No requests recorded yet.</td></tr>`;

    return {
      tableHtml: `
      <div class="overflow-x-auto">
        <table class="min-w-full border border-gray-300 rounded-md border-separate" style="border-spacing:0">
          <thead class="bg-pink-300">
            <tr>
              <th class="px-4 py-2 border-b text-purple-800">${t.status}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t.method}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t.url}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t.created}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t.duration}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t.reqSize}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t.resSize}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t.error}</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    `,
    };
  }
);
