import React from 'react';

import type { BodyMode } from '@/types/restFullClient';

import { Button } from '@/components/ui/button';
import { labelForBody } from '@/utils/requestEditor';

export function BodyModeSelector({
  value,
  onChange,
}: {
  value: BodyMode;
  onChange: (v: BodyMode) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {(['none', 'json', 'form-data', 'raw'] as BodyMode[]).map((mode) => (
        <Button
          key={mode}
          type="button"
          variant={value === mode ? 'default' : 'outline'}
          size="sm"
          onClick={() => {
            onChange(mode);
          }}
        >
          {labelForBody(mode)}
        </Button>
      ))}
    </div>
  );
}
