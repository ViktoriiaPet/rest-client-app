import React from 'react';

import type { JSX } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { getStatusColor } from '@/utils/getStatusColor';

type ErrorModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  statusCode?: number;
  message?: string;
};

export const ErrorModal = ({
  isOpen,
  onClose,
  statusCode,
  message,
}: ErrorModalProps): JSX.Element => {
  const bgColorClass = getStatusColor(statusCode);
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className={bgColorClass}>
          <DialogHeader>
            <DialogTitle className="text-white">
              Error {statusCode || 'unknown'}
            </DialogTitle>
            <DialogDescription className="text-white">
              {message || 'Произошла ошибка при выполнении запроса.'}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
