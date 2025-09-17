import type { RequestSnapshot, KeyValueRow } from '@/types/restFullClient';

type HarNameValue = { name: string; value: string };
type HarPostParam = { name: string; value: string; fileName?: string };
type HarPostData = {
  mimeType?: string;
  text?: string;
  params?: HarPostParam[];
};
type HarRequest = {
  method: string;
  url: string;
  httpVersion: string;
  headers: HarNameValue[];
  queryString: HarNameValue[];
  postData?: HarPostData;
};

function toEnabledRows(rows: KeyValueRow[]): HarNameValue[] {
  return rows
    .filter((row) => !!row.key && row.enabled)
    .map((row) => ({ name: row.key, value: row.value }));
}

function rawMime(snapshot: RequestSnapshot): string {
  const contentType = snapshot.headers.find(
    (header) => header.enabled && header.key.toLowerCase() === 'content-type'
  )?.value;
  return contentType ?? 'text/plain; charset=utf-8';
}

export function buildHarFromSnapshot(
  snapshot: RequestSnapshot,
  url: string
): HarRequest {
  const method = snapshot.method.toUpperCase();
  const canSendBody = method !== 'GET' && method !== 'HEAD';
  const bodyMode = snapshot.body.mode;
  let postData: HarPostData | undefined;

  if (canSendBody && bodyMode !== 'none') {
    switch (bodyMode) {
      case 'json':
        postData = {
          mimeType: 'application/json',
          text: snapshot.body.jsonText ?? '',
        };
        break;

      case 'form-data':
        postData = {
          mimeType: 'multipart/form-data',
          params: (snapshot.body.formData ?? [])
            .filter((row) => row.enabled && !!row.key)
            .map((row) => ({ name: row.key, value: row.value })),
        };
        break;

      case 'raw':
        postData = {
          mimeType: rawMime(snapshot),
          text: snapshot.body.rawText ?? '',
        };
        break;
    }
  }

  return {
    method,
    url,
    httpVersion: 'HTTP/1.1',
    headers: toEnabledRows(snapshot.headers),
    queryString: toEnabledRows(snapshot.params),
    postData,
  };
}
