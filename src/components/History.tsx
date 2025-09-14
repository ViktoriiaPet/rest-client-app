import {
  collection,
  getDocs,
  query,
  where,
  type Timestamp,
  type DocumentData,
} from 'firebase/firestore';
import { Loader2, RefreshCw } from 'lucide-react';
import React, { useEffect, useState, useCallback } from 'react';

import type { HttpMethod } from '@/types/apiMethods';
import type { JSX } from 'react';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/service/firebase';

type HistoryRow = {
  id: string;
  method: HttpMethod;
  url: string;
  createdAt: Date | null;
};

type FireRequestDoc = {
  userId?: string | null;
  method?: string;
  url?: string;
  createdAt?: Timestamp | null;
};

const toHttpMethod = (m?: string): HttpMethod => {
  const up = (m ?? 'GET').toUpperCase();
  return (
    ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'] as const
  ).includes(up as HttpMethod)
    ? (up as HttpMethod)
    : 'GET';
};

async function fetchUserRequests(userId: string): Promise<HistoryRow[]> {
  const col = collection(db, 'requests').withConverter<FireRequestDoc>({
    fromFirestore: (snap) => snap.data() as FireRequestDoc,
    toFirestore: (data: FireRequestDoc): DocumentData => ({ ...data }),
  });

  const snap = await getDocs(query(col, where('userId', '==', userId)));

  const items: HistoryRow[] = snap.docs.map((doc) => {
    const data = doc.data();
    console.warn('fetchUserRequests data:', data);

    return {
      id: doc.id,
      method: toHttpMethod(data.method),
      url: data.url ?? '',
      createdAt: data.createdAt ? data.createdAt.toDate() : null,
    };
  });

  items.sort(
    (a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0)
  );
  return items;
}

export function HistoryComponent(): JSX.Element {
  const { user } = useAuth();

  const [rows, setRows] = useState<HistoryRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadRequests = useCallback(async (): Promise<void> => {
    if (!user) {
      setRows([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const items = await fetchUserRequests(user.uid);
      setRows(items);
    } catch {
      setError('Failed to load history');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    void loadRequests();
  }, [loadRequests]);

  if (!user) {
    return <div className="p-4">Sign in to view request history</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          className="hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md"
          size="sm"
          onClick={() => void loadRequests()}
          disabled={loading}
        >
          <RefreshCw
            className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`}
          />
          Refresh
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-sm opacity-70">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading…
        </div>
      ) : error ? (
        <div className="text-sm text-rose-600">{error}</div>
      ) : rows.length === 0 ? (
        <div className="text-sm opacity-70">No requests yet</div>
      ) : (
        <div className="space-y-2">
          {rows.map((row) => (
            <p
              key={row.id}
              className="flex items-center gap-3 text-sm border rounded p-2"
            >
              <span className="inline-flex min-w-[56px] justify-center rounded px-2 py-0.5 border">
                {row.method}
              </span>
              <a
                className="truncate underline flex-1"
                href={row.url}
                target="_blank"
                rel="noreferrer"
              >
                {row.url}
              </a>
              <span className="opacity-60 whitespace-nowrap">
                {row.createdAt ? row.createdAt.toLocaleString() : '—'}
              </span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
