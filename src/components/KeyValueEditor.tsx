import { Plus, Trash2 } from 'lucide-react';
import React from 'react';

import { Checkbox } from './ui/checkbox';

import type { KeyValueRow, KeyValueEditorProps } from '@/types/restFullClient';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { newRow } from '@/utils/requestEditor';

export function KeyValueEditor({
  rows,
  onChange,
  addLabel,
}: KeyValueEditorProps) {
  const update = (id: string, patch: Partial<KeyValueRow>) => {
    onChange(rows.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  };
  const remove = (id: string) => {
    onChange(rows.filter((row) => row.id !== id));
  };
  const add = () => {
    onChange([...rows, newRow()]);
  };

  return (
    <div className="w-full space-y-2">
      <div className="space-y-2">
        {rows.map((row) => (
          <div key={row.id} className="flex items-center gap-4">
            <Checkbox
              className="data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500 focus-visible:ring-pink-500"
              checked={row.enabled}
              onCheckedChange={(checked) => {
                update(row.id, { enabled: checked === true });
              }}
            />
            <Input
              value={row.key}
              onChange={(e) => {
                update(row.id, { key: e.target.value });
              }}
              placeholder="Key"
              className="border-pink-300 focus-visible:ring-pink-500 caret-pink-600 placeholder-pink-300/70"
            />
            <Input
              value={row.value}
              onChange={(e) => {
                update(row.id, { value: e.target.value });
              }}
              placeholder="Value"
              className="border-pink-300 focus-visible:ring-pink-500 caret-pink-600 placeholder-pink-300/70"
            />

            <Button
              variant="ghost"
              size="icon"
              type="button"
              onClick={() => {
                remove(row.id);
              }}
              className="
                cursor-pointer
                bg-transparent hover:bg-transparent active:bg-transparent
                text-pink-600 hover:text-pink-700
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/60 focus-visible:ring-offset-2
                transition-colors
              "
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div>
        <Button
          variant="outline"
          className="hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md"
          size="sm"
          type="button"
          onClick={add}
        >
          <Plus className="mr-2 h-4 w-4" /> {addLabel}
        </Button>
      </div>
    </div>
  );
}
