import type { BodyMode } from '@/types/restFullClient';
import { Button } from '@/components/ui/button';

export function BodyModeSelector({
  value,
  onChange,
}: {
  value: BodyMode;
  onChange: (mode: BodyMode) => void;
}) {
  const modes = ['none', 'json', 'form-data', 'raw'] as const;

  return (
    <div className="flex items-center gap-2">
      {modes.map((mode) => {
        const active = value === mode;
        return (
          <Button
            key={mode}
            type="button"
            size="sm"
            variant="outline"
            aria-pressed={active}
            className={
              active
                ? 'bg-pink-300 text-purple-700 font-semibold py-2 px-4 rounded-lg shadow-none border border-pink-300'
                : 'bg-pink-200 text-purple-600 hover:bg-yellow-100 font-semibold py-2 px-4 rounded-lg shadow-md'
            }
            onClick={() => onChange(mode)}
          >
            {mode}
          </Button>
        );
      })}
    </div>
  );
}
