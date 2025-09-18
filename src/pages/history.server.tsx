import cookie from 'cookie';
import {
  collection,
  getDocs,
  query,
  where,
  type Timestamp,
  type DocumentData,
} from 'firebase/firestore';
import React from 'react';

import type { JSX } from 'react';

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
  statusText?: string;
};

type HistoryRow = {
  id: string;
  method: string;
  url: string;
  createdAt: Date | null;
  bodyMode: string;
  bodyPreview: object;
  latencyMs: number | null;
  statusCode: number | null;
  statusText: string;
  lang: string;
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
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
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

  let history: HistoryRow[] = [];

  if (userId) {
    const colRef = collection(db, 'requests').withConverter<FireRequestDoc>({
      fromFirestore: (snap) => snap.data() as FireRequestDoc,
      toFirestore: (data: FireRequestDoc): DocumentData => ({ ...data }),
    });

    const q = query(colRef, where('userId', '==', userId));

    const snap = await getDocs(q);

    history = snap.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        method: data.method ?? 'GET',
        url: data.url ?? '',
        createdAt: data.createdAt ? data.createdAt.toDate() : null,
        latencyMs: data.latencyMs,
        statusCode: data.statusCode,
        statusText: data.statusText,
        lang: lang,
      } as HistoryRow;
    }).filter((row) => row.url && row.createdAt);;
    history.sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;
      return b.createdAt.getTime() - a.createdAt.getTime();
    });
  }

  return { token, history, userId, userName, lang };
}

export default function HistoryPage({
  loaderData,
}: {
  loaderData: LoaderData;
}) {
  console.log(loaderData);

  const t = (key: string) => {
    const dict: Record<string, Record<string, string>> = {
      en: {
        statusCode: 'Status Code',
        method: 'Method',
        url: 'URL',
        createdAt: 'Created At',
        duration: 'Request duration',
        error: 'Error information',
      },
      ru: {
        statusCode: 'Код ответа',
        method: 'Метод',
        url: 'Ссылка',
        createdAt: 'Создано',
        duration: 'Длительность запроса',
        error: 'Информация об ошибке',
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
            <th className="px-4 py-2 border-b text-purple-800">{t('error')}</th>
          </tr>
        </thead>
        <tbody>
          {loaderData.history.map((row) => {
            const urlB64 = b64EncodeUnicode(row.url);
            let bodyB64 = '';
            if (row.bodyPreview) {
              if (typeof row.bodyPreview === 'string') {
                bodyB64 = b64EncodeUnicode(row.bodyPreview);
              } else {
                bodyB64 = b64EncodeUnicode(JSON.stringify(row.bodyPreview));
              }
            }
            const link = `/auth/restfull/${row.method}/${urlB64}/${bodyB64}`;

            return (
              <tr key={row.id} className="hover:bg-amber-50">
                <td className="px-4 py-2 border-b text-purple-600">
                  {row.statusCode}
                </td>
                <td className="px-4 py-2 border-b font-medium text-purple-600">
                  {row.method}
                </td>
                <td className="px-4 py-2 border-b text-purple-600">
                  <a
                    href={link}
                    className="underline text-blue-600 truncate"
                    title={row.url}
                  >
                    {row.url}
                  </a>
                </td>
                <td className="px-4 py-2 border-b text-purple-600">
                  {row.createdAt?.toISOString()}
                </td>
                <td className="px-4 py-2 border-b text-purple-600">
                  {row.latencyMs}
                </td>
                <td className="px-4 py-2 border-b text-purple-600">
                  {row.statusText}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
