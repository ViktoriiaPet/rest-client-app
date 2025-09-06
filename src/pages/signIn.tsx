import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { registrationSchema } from '../utils/validateRegistration.ts';
import { Button } from '@/components/ui/button.tsx';

import type { FormData, FormErrors } from '../types/validationType.ts';

export default function SignIn() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    const result = registrationSchema.safeParse({ ...formData, [name]: value });

    if (result.success) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } else {
      const fieldError = result.error.issues.find(
        (issue) => issue.path[0] === name
      );
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError ? fieldError.message : undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const result = registrationSchema.safeParse(formData);

    if (result.success) {
      setErrors({});
    } else {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof FormData] = issue.message;
        }
      });
      setErrors(fieldErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-position  text-purple-600  flex flex-col items-center" >
      <h2 className="p-[1vw] font-inter text-xl text-purple-600">{t('SignIn')}</h2>
      <div className="flex flex-col items-center p-[5vw] gap-[1vw]">
        <input
          name="username"
          placeholder={t('Name')}
          value={formData.username}
          onChange={handleChange}
          className="text-center bg-transparent max-w-[40vw] border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl"
        />
        <p className="errors text-center w-full">
        {errors.username || ''}
</p>
        <input
          name="email"
          placeholder={t('Email')}
          value={formData.email}
          onChange={handleChange}
          className="text-center bg-transparent max-w-[40vw] border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl"
        />
        <p className="errors text-center w-full">
          {errors.email || ''}
        </p>
        

        <input
          name="password"
          type="password"
          placeholder={t('Password')}
          value={formData.password}
          onChange={handleChange}
          className="text-center bg-transparent max-w-[40vw] border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl"
        />
        <p className="errors text-center w-full">
        {errors.password || ''}
</p>
        <div className="buttons-block">
          <Button variant="custom" type="submit">
            {t('Submit')}
          </Button>
        </div>
      </div>
    </form>
  );
}
