import { loader as serverLoader } from './history.server'; // вынесли серверный loader
export { serverLoader as loader };

export default function HistoryPage({
  loaderData,
}: {
  loaderData: { tableHtml: string };
}) {
  return <div dangerouslySetInnerHTML={{ __html: loaderData.tableHtml }} />;
}
