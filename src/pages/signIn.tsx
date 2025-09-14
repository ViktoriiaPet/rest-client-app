import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router';

import { getLoginSchema } from '../utils/validateRegistration.ts';

import type { FormData, FormErrors } from '../types/validationType.ts';

import { Button } from '@/components/ui/button.tsx';
import { useAuth } from '@/context/AuthContext.tsx';
import { logInWithEmailAndPassword } from '@/service/firebase.ts';

export default function SignIn() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const { user, token, setUser, setToken } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      void navigate('/mainClint');
    }
  }, [user, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    const schema = getLoginSchema();
    const result = schema.safeParse({ ...formData, [name]: value });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const schema = getLoginSchema();
    const result = schema.safeParse(formData);

    if (result.success) {
      setErrors({});
      try {
        const res = await logInWithEmailAndPassword(
          formData.email,
          formData.password
        );

        if (res) {
          console.log('is logined:', res.user);
          console.log('token:', res.token);
          setUser(res.user);
          setToken(res.token);
          void navigate('/mainClint');
        }
      } catch (err) {
        console.error('error with login', err);
      }
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

  useEffect(() => {
    console.log('user from context:', user);
    console.log('token from context:', token);
  }, [user, token]);

  return (
    <form
      onSubmit={handleSubmit}
      className="form-position  text-purple-600  flex flex-col items-center"
    >
      <h2 className="pb-[3vw] font-inter text-xl text-purple-600">
        {t('auth.signIn')}
      </h2>
      <div className="flex flex-col items-center p-[5vw] gap-[1vw] rounded-[15%] border-2 border-purple-300">
        <p className="errors text-center w-full">{errors.username || ''}</p>
        <div className="relative w-full max-w-[40vw]">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
          <input
            name="email"
            placeholder={t('Email')}
            value={formData.email}
            onChange={handleChange}
            className="pl-10 pr-2 text-center bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
          />
        </div>
        <p className="errors text-center w-full">{errors.email || ''}</p>
        <div className="relative w-full max-w-[40vw]">
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
          <input
            name="password"
            type="password"
            placeholder={t('Password')}
            value={formData.password}
            onChange={handleChange}
            className="pl-10 pr-2 text-center bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
          />
        </div>
        <p className="errors text-center w-full">{errors.password || ''}</p>
        <div className="buttons-block pt-[3vw]">
          <Button variant="custom" type="submit">
            {t('Submit')}
          </Button>
        </div>
      </div>
    </form>
  );
}
