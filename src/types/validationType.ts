export type FormData = {
  username: string;
  email: string;
  password: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;
