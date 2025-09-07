import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { registerWithEmailAndPassword } from '@/service/firebase.ts';
import { Button } from '../components/ui/button.tsx';
import { getRegistrationSchema } from '../utils/validateRegistration.ts';

import type { FormData, FormErrors } from '../types/validationType.ts';

export default function SignUp() {
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

    const schema = getRegistrationSchema();
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

    const schema = getRegistrationSchema();
    const result = schema.safeParse(formData);

 if (result.success) {
      setErrors({});
      try {
        const res = await registerWithEmailAndPassword(
          formData.username,
          formData.email,
          formData.password
        );
        
              if (res) {
        console.log("✅ Зарегистрирован:", res.user);
        console.log("🔑 JWT токен:", res.token);
        localStorage.setItem("token", res.token);
        //window.location.href = "/";
      }
        console.log('Reg is done');
      } catch (err) {
        console.error('Error rith reg', err);
      }
    } else {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const typedIssue = issue;
        if (typedIssue.path[0]) {
          fieldErrors[typedIssue.path[0] as keyof FormData] =
            typedIssue.message;
        }
      });
      setErrors(fieldErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-position  text-purple-600  flex flex-col items-center"
    >
      <h2 className="pb-[3vw] font-inter text-xl text-purple-600">
        {t('SignUp')}
      </h2>
      <div className="flex flex-col items-center p-[5vw] gap-[1vw] rounded-[15%] border-2 border-purple-300">
        <div className="relative w-full max-w-[40vw]">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
          <input
            name="username"
            placeholder={t('Name')}
            value={formData.username}
            onChange={handleChange}
            className="text-center bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl"
          />
        </div>
        <p className="errors text-center w-full">{errors.username || ''}</p>

        <div className="relative w-full max-w-[40vw]">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
          <input
            name="email"
            placeholder={t('Email')}
            value={formData.email}
            onChange={handleChange}
            className="text-center bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl"
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
            className="text-center bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl"
          />
        </div>
        <p className="errors text-center w-full">{errors.password || ''}</p>

        <div className="buttons-block pt-[3vw]">
          <Button variant="custom" className="mr-[2vw]" type="submit">
            {t('Submit')}
          </Button>
          <NavLink to="/signIn" end>
            <Button variant="custom" type="button">
              {t('IsAccount')}
            </Button>
          </NavLink>
        </div>
      </div>
    </form>
  );
}
