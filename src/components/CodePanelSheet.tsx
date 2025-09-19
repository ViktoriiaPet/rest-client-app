import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import GeneratedCodePanel from '@/components/GeneratedCodePanel';
import type { RequestSnapshot } from '@/types/restFullClient';
import { useTranslation } from 'react-i18next';

export default function CodePanelSheet({
  snapshot,
}: {
  snapshot: RequestSnapshot | null;
}) {
  const { t } = useTranslation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md"
        >
          {t('restfull.codeBtn')}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="z-50 bg-pink-200 text-purple-600 sm:max-w-md lg:max-w-xl w-[92vw]"
      >
        <SheetHeader>
          <SheetTitle className="text-purple-600">
            {t('restfull.generatedCode')}
          </SheetTitle>
        </SheetHeader>

        <div className="mt-4">
          {snapshot ? (
            <GeneratedCodePanel snapshot={snapshot} className="w-full" />
          ) : (
            <div className="rounded border border-pink-300 p-3 text-sm text-purple-600">
              {t('restfull.codeText')}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
