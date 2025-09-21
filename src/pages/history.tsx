import { loader as serverLoader } from './history.server';
export { serverLoader as loader };
import React, { Suspense, lazy } from 'react';

const _LazyPage = lazy(async () => ({
  default: (props: { loaderData: { tableHtml: string } }) => (
    <div dangerouslySetInnerHTML={{ __html: props.loaderData.tableHtml }} />
  ),
}));

export default function HistoryPage(props: { loaderData: { tableHtml: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <_LazyPage loaderData={props.loaderData} />
    </Suspense>
  );
}
