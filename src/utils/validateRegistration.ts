import { z } from 'zod';

export const registrationSchema = z.object({
  username: z
    .string()
    .min(1, 'Введите имя пользователя')
    .regex(/^[А-Яа-яЁёA-Za-z]+$/, 'Имя должно содержать только буквы'),

  email: z.email('Введите корректный email'),

  password: z
    .string()
    .regex(
      /^(?=.*\p{L})(?=.*\d)(?=.*[^\p{L}\d]).{8,}$/u,
      'Пароль должен быть не менее 8 символов и содержать заглавную букву, строчную и цифру'
    ),
});
