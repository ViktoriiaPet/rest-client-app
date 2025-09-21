import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

type ErrorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
};

export default function ErrorModal({
  isOpen,
  onClose,
  message,
}: ErrorModalProps) {
  const { t } = useTranslation();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[300px] p-4 text-center">
        <DialogTitle className="text-purple-600">
          {t('buttons.error')}
        </DialogTitle>
        <DialogDescription>{message}</DialogDescription>
        <Button className="mt-4" variant="custom" onClick={onClose}>
          {t('buttons.close')}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
