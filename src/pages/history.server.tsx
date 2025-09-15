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
  timeMs?: number | null;
  bodyPreview?: string | null;
  headers?: Record<string, unknown> | null;
  params?: Record<string, unknown> | null;
};

type HistoryRow = {
  id: string;
  method: string;
  url: string;
  createdAt: Date | null;
  bodyMode: string;
  bodyPreview:object;

};

type LoaderData = {
  token: string | null;
  history: HistoryRow[];
  userId: string | null;
  userName: string | null;
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

export async function loader({
  request,
}: {
  request?: Request;
}): Promise<LoaderData> {
  const cookieHeader = request?.headers.get('cookie') ?? '';
  const cookies = cookie.parse(cookieHeader);
  const token = cookies.userToken ?? null;

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
      } as HistoryRow;
    });
  }

  return { token, history, userId, userName };
}

export default function HistoryPage({
  loaderData,
}: {
  loaderData: LoaderData;
}) {
  console.log(loaderData);
  return (
    <div>
      { loaderData.history.map((row) => (
        <div key={row.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
          <p>{row.method}</p>
          <p>{row.url} </p>
          <p>{row.createdAt?.toISOString()}</p>
        </div>
      ))}
    </div>
  );
}
