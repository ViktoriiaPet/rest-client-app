import { t } from 'i18next';
import { z } from 'zod';

export const getRegistrationSchema = () =>
  z.object({
    username: z
      .string()
      .min(1, t('validation.usernameRequired'))
      .regex(/^[A-Za-zА-Яа-яЁё]+$/, t('validation.usernameLetters')),

    email: z.email(t('validation.emailInvalid')),

    password: z
      .string()
      .regex(
        /^(?=.*\p{L})(?=.*\d)(?=.*[^\p{L}\d]).{8,}$/u,
        t('validation.passwordInvalid')
      ),
  });

export const getLoginSchema = () =>
  z.object({
    email: z.email(t('validation.emailInvalid')),
    password: z
      .string()
      .regex(
        /^(?=.*\p{L})(?=.*\d)(?=.*[^\p{L}\d]).{8,}$/u,
        t('validation.passwordInvalid')
      ),
  });

export type LoginSchema = z.infer<ReturnType<typeof getLoginSchema>>;

export type RegistrationSchema = z.infer<ReturnType<typeof getRegistrationSchema>>;
