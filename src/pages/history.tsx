
import { loader as serverLoader } from './history.server';
export { serverLoader as loader };
import React from 'react';

const _LoadLazy = React.lazy(async () => {
  return { default: () => null };
});

export default function HistoryPage({
  loaderData,
}: {
  loaderData: { tableHtml: string };
}) {
  void _LoadLazy;
  return <div dangerouslySetInnerHTML={{ __html: loaderData.tableHtml }} />;
}
