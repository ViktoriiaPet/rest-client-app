import cookie from 'cookie';
import React from 'react';
import { db } from '@/service/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import type { JSX } from 'react';

type HistoryRow = {
  id: string;
  method: string;
  url: string;
  createdAt: Date | null;
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
  const cookieHeader = request?.headers.get('cookie') || '';
  const cookies = cookie.parse(cookieHeader);
  const token = cookies.userToken || null;

  let userId: string | null = null;
  let userName: string | null = null;

  if (token) {
    const decoded = parseJwt<{ user_id: string; name?: string }>(token);
    if (decoded) {
      userId = decoded.user_id;
      userName = decoded.name || null;
    }
  }

  let history: HistoryRow[] = [];

if (userId) {
  const q = query(collection(db, "requests"), where("userId", "==", userId));
  const snap = await getDocs(q);

  history = snap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      method: data.method,
      url: data.url,
      createdAt: data.createdAt?.toDate?.() ?? null,
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
      <p>Token: {loaderData.token}</p>
      <div>user: {loaderData.userId} </div>
      <div>History length: {loaderData.history.length}</div>
    </div>
  );
}
