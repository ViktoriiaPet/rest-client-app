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

function toEnabledHeaders(rows: KeyValueRow[]): HarNameValue[] {
  return rows
    .filter((h) => !!h.key && h.enabled)
    .map((h) => ({ name: h.key, value: h.value }));
}

function toEnabledParams(rows: KeyValueRow[]): HarNameValue[] {
  return rows
    .filter((p) => !!p.key && p.enabled)
    .map((p) => ({ name: p.key, value: p.value }));
}

function guessRawMime(snapshot: RequestSnapshot): string {
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

  const bodyMode = snapshot.body.mode;
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
            .filter((r) => r.enabled && !!r.key)
            .map((r) => ({ name: r.key, value: r.value })),
        };
        break;

      case 'raw':
        postData = {
          mimeType: guessRawMime(snapshot),
          text: snapshot.body.rawText ?? '',
        };
        break;
    }
  }

  const har: HarRequest = {
    method,
    url,
    httpVersion: 'HTTP/1.1',
    headers: toEnabledHeaders(snapshot.headers),
    queryString: toEnabledParams(snapshot.params),
    postData,
  };

  return har;
}
