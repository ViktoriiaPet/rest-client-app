import React from 'react';

import type { JSX } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
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
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className={bgColorClass}>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-purple-600">
            Error {statusCode || 'unknown'}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-900">
            {message || 'Произошла ошибка при выполнении запроса.'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
