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
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

type ErrorModalProps = {
  isOpen?: boolean;
  onClose: ()=> void;
  statusCode?: number;
  message?: string
}

export const ErrorModal=(
  {isOpen,
  onClose,
  statusCode,
  message}
:ErrorModalProps): JSX.Element=>{
  return (
    <AlertDialog open={isOpen} onClose={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Error {statusCode || 'unknown'}</AlertDialogTitle>
          <AlertDialogDescription>
            {message || 'Произошла ошибка при выполнении запроса.'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}