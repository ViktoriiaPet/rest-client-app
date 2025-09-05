import React, { useState } from 'react';

import { registrationSchema } from '../utils/validateRegistration.ts';

import type { FormData, FormErrors } from '../types/validationType.ts';

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setFormData(prev => ({ ...prev, [name]: value }));

  const result = registrationSchema.safeParse({ ...formData, [name]: value });

  if (result.success) {
    setErrors(prev => ({ ...prev, [name]: undefined }));
  } else {
    const fieldError = result.error.issues.find(issue => issue.path[0] === name);
    setErrors(prev => ({
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
    <form onSubmit={handleSubmit} className="form-position">
      <h1>App</h1>
      <h2>Регистрация</h2>

      <input
        name="username"
        placeholder="Имя"
        value={formData.username}
        onChange={handleChange}
      />
      {!!errors.username && (
        <p className="errors">{errors.username}</p>
      )}

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {!!errors.email && (
        <p className="errors">{errors.email}</p>
      )}

      <input
        name="password"
        type="password"
        placeholder="Пароль"
        value={formData.password}
        onChange={handleChange}
      />
      {!!errors.password && (
        <p className="errors">{errors.password}</p>
      )}

      <div className="buttons-block">
        <button className="button-reg" type="submit">
          Зарегистрироваться
        </button>
        <button className="button-reg" type="button">
          Уже есть учетная запись?
        </button>
      </div>
    </form>
  );
}
