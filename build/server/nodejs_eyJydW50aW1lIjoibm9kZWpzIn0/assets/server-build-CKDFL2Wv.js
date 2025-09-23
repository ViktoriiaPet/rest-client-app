import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useNavigate, NavLink, UNSAFE_withComponentProps, Meta, Links, Outlet, Scripts, Navigate } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as React from "react";
import React__default, { createContext, useContext, useState, useEffect, Component, useRef, Suspense, lazy, useMemo, useCallback } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, onIdTokenChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import i18next, { t } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, withTranslation, useTranslation } from "react-i18next";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { z } from "zod";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Navigate as Navigate$1, useParams, useLocation, useNavigate as useNavigate$1, Link } from "react-router-dom";
import cookie from "cookie";
const streamTimeout = 5e3;
function handleRequest(request2, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request2.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request2.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const AuthContext = createContext({
  user: null,
  token: null,
  loading: true,
  setUser: () => {
    throw new Error("setUser must be used within AuthProvider");
  },
  setToken: () => {
    throw new Error("setUser must be used within AuthProvider");
  }
});
const AuthProvider = ({
  children
}) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;
    let unsubscribe;
    void (async () => {
      const { auth: auth2 } = await Promise.resolve().then(() => firebase);
      const { onAuthStateChanged } = await import("firebase/auth");
      unsubscribe = onAuthStateChanged(auth2, (firebaseUser) => {
        void (async () => {
          if (firebaseUser) {
            setUser(firebaseUser);
            const idToken = await firebaseUser.getIdToken();
            setToken(idToken);
          } else {
            setUser(null);
            setToken(null);
          }
          setLoading(false);
        })();
      });
    })();
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);
  return /* @__PURE__ */ jsx(AuthContext.Provider, { value: { user, token, loading, setUser, setToken }, children });
};
const useAuth = () => useContext(AuthContext);
const firebaseConfig = {
  apiKey: "AIzaSyAFMdW1Th1OKcBvFuxokKb8GAzHtyxU6Wk",
  authDomain: "rest-client-app-5769b.firebaseapp.com",
  projectId: "rest-client-app-5769b",
  storageBucket: "rest-client-app-5769b.firebasestorage.app",
  messagingSenderId: "871751415386",
  appId: "1:871751415386:web:5e24636a4e7fbf9a640a63",
  measurementId: "G-H091NY0HYV"
};
const app$2 = initializeApp(firebaseConfig);
const auth$2 = getAuth(app$2);
const db = getFirestore(app$2);
function initAuthWatcher(navigate) {
  let called = false;
  const unsubscribe = onIdTokenChanged(auth$2, (user) => {
    void (async () => {
      if (called) return;
      const currentPath = window.location.pathname;
      if (!user) {
        called = true;
        void logout();
        if (currentPath !== "/") void navigate("/");
        return;
      }
      try {
        const tokenResult = await user.getIdTokenResult();
        const expiration = new Date(tokenResult.expirationTime).getTime();
        if (expiration <= Date.now()) {
          called = true;
          void logout();
          if (currentPath !== "/") void navigate("/");
        }
      } catch (err) {
        console.error(err);
        called = true;
        void logout();
        if (currentPath !== "/") void navigate("/");
      }
    })();
  });
  return unsubscribe;
}
const logInWithEmailAndPassword = async (email, password) => {
  const res = await signInWithEmailAndPassword(auth$2, email, password);
  const user = res.user;
  const token = await user.getIdToken();
  return { user, token };
};
const registerWithEmailAndPassword = async (name, email, password) => {
  const res = await createUserWithEmailAndPassword(auth$2, email, password);
  const user = res.user;
  await updateProfile(user, { displayName: name });
  const token = await user.getIdToken();
  await addDoc(collection(db, "users"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email
  });
  return { user, token };
};
const logout = async () => {
  try {
    await signOut(auth$2);
  } catch (err) {
    console.error("Logout failed:", err);
  }
};
const firebase = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  auth: auth$2,
  db,
  initAuthWatcher,
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword
}, Symbol.toStringTag, { value: "Module" }));
const getUserVariables = (userId) => {
  return JSON.parse(
    localStorage.getItem(`userVariables_${userId}`) || "{}"
  );
};
const saveUserVariables = (userId, vars) => {
  localStorage.setItem(`userVariables_${userId}`, JSON.stringify(vars));
};
const VariablesContext = createContext(
  null
);
function VariablesProvider({ children }) {
  const { user } = useAuth();
  const [variables2, setVariablesState] = useState({});
  useEffect(() => {
    if (user?.uid) {
      const vars = getUserVariables(user.uid);
      setVariablesState(vars);
    } else {
      setVariablesState({});
    }
  }, [user]);
  const setVariables = (vars) => {
    setVariablesState(vars);
    if (user?.uid) {
      saveUserVariables(user.uid, vars);
    }
  };
  return /* @__PURE__ */ jsx(VariablesContext.Provider, { value: { variables: variables2, setVariables }, children });
}
function useVariables() {
  const ctx = useContext(VariablesContext);
  if (!ctx)
    throw new Error("useVariables must be used within VariablesProvider");
  return ctx;
}
const auth$1 = { "signIn": "Sign in", "signUp": "Sign up", "welcome": "Welcome", "welcomeBack": "Welcome Back", "isAccount": "Already have an account?", "logOut": "Log Out" };
const form$1 = { "name": "Name", "email": "Email", "password": "Password", "submit": "Submit" };
const lang$1 = { "english": "English", "russian": "Russian" };
const app$1 = { "title": "RESTClient", "history": "History", "historyRequests": "History Requests", "variables": "Variables", "mainPage": "Main page", "github": "Github", "loading": "Loading" };
const request$1 = { "method": "Method", "endpointUrl": "Endpoint URL", "headers": "Headers", "headerKey": "Header Key", "headerValue": "Header Value", "code": "Code", "body": "Body", "response": "Response", "status": "Status", "copyJSON": "Copy JSON", "params": "Params", "addParam": "Add param", "addHeader": "Add header", "addField": "Add field", "rawBody": "Raw body", "invalidUrl": "Invalid URL" };
const emptyState$1 = { "noRequests": "You haven't executed any requests", "hint": "It's empty here. Try:" };
const validation$1 = { "usernameRequired": "Enter username", "usernameLetters": "Username can only contain letters", "emailInvalid": "Enter a valid email", "passwordInvalid": "Password must be at least 8 characters and include uppercase, lowercase and a number" };
const notFound$2 = { "title": "404 — Page not found", "description": "The page you’re looking for doesn’t exist or has moved.", "back": "Go back", "home": "Go home" };
const errorBoundary$1 = { "title": "Something went wrong", "tryAgain": "Try again" };
const buttons$1 = { "send": "Send", "copy": "Copy", "close": "Close", "error": "Error", "prettify": "Prettify" };
const clientPage$1 = { "restfull": "Restfull", "variables": "Variables", "history": "History" };
const variables$2 = { "addButton": "Add", "variableName": "Variable name", "variableValue": "Variable value", "delete": "Delete" };
const aboutDarya$1 = { "photoAlt": "Darya's photo", "name": "Dasha", "text": "Hi! My name is Dasha. I currently live in Ottawa, Canada, where I've been for the past three years after moving here with my family and our two cats. In my free time, I enjoy knitting and reading.", "linkGitHub": "GitHub link" };
const aboutAlyona$1 = { "photoAlt": "Alyona's photo", "name": "Alyona", "text": "Hi :) My name is Alyona. I live in Saint Petersburg, Russia. I love traveling and discovering new things.", "linkGitHub": "GitHub link" };
const aboutVika$1 = { "photoAlt": "Vika's photo", "name": "Vika", "text": "Hi, I’m Vika. I live in Barcelona and I’m diligently learning Spanish. My hobbies are everything related to handicrafts: sewing, knitting, sculpting. 😊", "linkGitHub": "GitHub link" };
const restfull$2 = { "generatedCode": "Generated code", "generating": "Generating snippets…", "chooseLanguage": "Choose language…", "notAvailable": "Not available for this request", "urlInvalid": "URL is missing or invalid", "genFailed": "Failed to generate code", "codeText": "Send a request to generate code", "codeBtn": "Show Code", "noResponse": "Click send to get a response" };
const info$1 = { "projectText": "Final assignment for the RS School React course, implemented according to the spec:", "projectLink": "final task", "courseText": "The Rolling Scopes School React course — free, community-driven training:", "courseLink": "rs.school/react" };
const en = {
  auth: auth$1,
  form: form$1,
  lang: lang$1,
  app: app$1,
  request: request$1,
  emptyState: emptyState$1,
  validation: validation$1,
  notFound: notFound$2,
  errorBoundary: errorBoundary$1,
  buttons: buttons$1,
  clientPage: clientPage$1,
  variables: variables$2,
  aboutDarya: aboutDarya$1,
  aboutAlyona: aboutAlyona$1,
  aboutVika: aboutVika$1,
  restfull: restfull$2,
  info: info$1
};
const auth = { "signIn": "Войти", "signUp": "Регистрация", "welcome": "Добро пожаловать", "welcomeBack": "С возвращением", "isAccount": "Уже есть аккаунт?", "logOut": "Выйти" };
const form = { "name": "Имя", "email": "Электронная почта", "password": "Пароль", "submit": "Отправить" };
const lang = { "english": "Английский", "russian": "Русский" };
const app = { "title": "RESTClient", "history": "История", "historyRequests": "Запросы истории", "variables": "Переменные", "mainPage": "Главная страница", "github": "Гитхаб", "loading": "Загрузка" };
const request = { "method": "Метод", "endpointUrl": "URL эндпоинта", "headers": "Заголовки", "headerKey": "Ключ заголовка", "headerValue": "Значение заголовка", "code": "Код", "body": "Тело", "response": "Ответ", "status": "Статус", "copyJSON": "Скопировать JSON", "params": "Параметры", "addParam": "Добавить параметры", "addHeader": "Добавить заголовки", "addField": "Добавить поле", "rawBody": "Текст", "invalidUrl": "Неверный URL" };
const emptyState = { "noRequests": "Вы ещё не выполняли запросы", "hint": "Здесь пусто. Попробуйте:" };
const Name = "Имя";
const Email = "Электронная почта";
const Password = "Пароль";
const Submit = "Отправить";
const IsAccount = "Уже есть аккаунт?";
const LogOut = "Выйти";
const MainPage = "Главная страница";
const abouVika = "Я живу в Барселоне и с большим интересом изучаю программирование. Раньше немного занималась аналитикой данных, и именно это подтолкнуло меня глубже погрузиться в сферу IT. Сейчас я параллельно обучаюсь на курсах по фуллстек-разработке и мне нравится ощущать прогресс: каждый новый модуль открывает что-то важное и помогает двигаться дальше. Особенно интересно наблюдать, как шаг за шагом удаётся собирать настоящие проекты, которые работают и приносят пользу. Для меня программирование — это не только про логику и код, но и про возможность воплощать идеи в реальность.";
const validation = { "usernameRequired": "Введите имя пользователя", "usernameLetters": "Имя должно содержать только буквы", "emailInvalid": "Введите корректный email", "passwordInvalid": "Пароль должен быть не менее 8 символов и содержать заглавную букву, строчную и цифру" };
const notFound$1 = { "title": "404 — Страница не найдена", "description": "Страница, которую вы ищете, не существует или была перемещена.", "back": "Назад", "home": "На главную" };
const errorBoundary = { "title": "Что-то пошло не так", "tryAgain": "Попробовать снова" };
const buttons = { "send": "Отправить", "copy": "Копировать", "close": "Закрыть", "error": "Ошибка", "prettify": "Отформатировать" };
const clientPage = { "restfull": "Pестфул", "variables": "Переменные", "history": "История" };
const variables$1 = { "addButton": "Добавить", "variableName": "Название переменной", "variableValue": "Значение переменной", "delete": "Удалить" };
const aboutDarya = { "photoAlt": "Фото Даши", "name": "Даша", "text": "Привет! Меня зовут Даша. Сейчас я живу в Оттаве. Мы переехали сюда три года назад всей семьёй с двумя котами. В свободное время я люблю вязать и читать.", "linkGitHub": "Ссылка на Гитхаб" };
const aboutAlyona = { "photoAlt": "Фото Алёны", "name": "Алёна", "text": "Привет :) Меня зовут Алёна. Я живу в Санкт-Петербурге. Очень люблю путешествовать и открывать для себя что-то новое.", "linkGitHub": "Ссылка на Гитхаб" };
const aboutVika = { "photoAlt": "Фото Вики", "name": "Вика", "text": "Привет, я Вика. Я живу в Барселоне и упорно изучаю испанский язык. Мои хобби — всё, что связано с рукоделием: шить, вязать, лепить. 😊", "linkGitHub": "Ссылка на Гитхаб" };
const restfull$1 = { "generatedCode": "Сгенерированный код", "generating": "Генерация сниппетов…", "chooseLanguage": "Выберите язык…", "notAvailable": "Недоступно для этого запроса", "urlInvalid": "URL отсутствует или недействителен", "genFailed": "Не удалось сгенерировать код", "codeText": "Отправьте запрос, чтобы сгенерировать код", "codeBtn": "Показать код", "noResponse": "Нажмите Отправить, чтобы получить ответ" };
const info = { "projectText": "Финальное задание курса React в RS School, выполнено по требованиям:", "projectLink": "финальное задание", "courseText": "Курс React в RS School — бесплатное, основанное на сообществе обучение:" };
const ru = {
  auth,
  form,
  lang,
  app,
  request,
  emptyState,
  Name,
  Email,
  Password,
  Submit,
  IsAccount,
  LogOut,
  MainPage,
  abouVika,
  validation,
  notFound: notFound$1,
  errorBoundary,
  buttons,
  clientPage,
  variables: variables$1,
  aboutDarya,
  aboutAlyona,
  aboutVika,
  restfull: restfull$1,
  info
};
function getLangFromCookies() {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|; )lang=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "en";
}
void i18next.use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  resources: {
    en: { translation: en },
    ru: { translation: ru }
  },
  lng: getLangFromCookies(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(err) {
    return {
      hasError: true,
      message: err instanceof Error ? err.message : String(err)
    };
  }
  componentDidCatch(error, info2) {
    console.error("ErrorBoundary:", error, info2);
  }
  retry = () => {
    this.setState({ hasError: false, message: void 0 });
  };
  render() {
    const { t: t2 } = this.props;
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-3", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: t2("errorBoundary.title", "Something went wrong") }),
        !!this.state.message && /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80 whitespace-pre-wrap break-words", children: this.state.message }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: this.retry,
            className: "px-3 py-1 rounded border",
            children: t2("errorBoundary.tryAgain", "Try again")
          }
        ) })
      ] });
    }
    return this.props.children;
  }
}
const ErrorBoundary$1 = withTranslation()(ErrorBoundary);
const rssLogo = "data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5701_38384)'%3e%3ccircle%20cx='32'%20cy='32'%20r='32'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13%2021.5095V42.5L19.3067%2042.4621V33.9474C20.0567%2033.9474%2020.7616%2033.9775%2021.4049%2034.4267C21.8946%2034.8785%2022.2838%2035.4335%2022.546%2036.054L25.9202%2042.4621H33C31.5957%2039.6675%2030.4706%2036.1327%2028.0552%2034.0104C27.5455%2033.6749%2026.9919%2033.4158%2026.411%2033.241C27.1873%2033.0779%2027.9357%2032.7973%2028.6319%2032.4084C30.3855%2031.3375%2031.3915%2029.3808%2031.3436%2027.3374C31.3798%2026.1328%2031.0495%2024.9466%2030.3988%2023.9441C28.9256%2021.6883%2025.9337%2021.4213%2023.4663%2021.5095H13ZM21.9939%2030.0116H19.3313V25.6975H22.1043C23.4807%2025.5594%2025.1814%2026.1754%2025.0859%2027.8041C25.1499%2029.5621%2023.3647%2029.9127%2021.9939%2030.0116Z'%20fill='%23FFB749'/%3e%3cpath%20d='M39.4768%2035.089L33%2035.4666C33.1262%2037.3671%2034.0021%2039.16%2035.4636%2040.5088C36.9117%2041.8323%2039.5076%2042.4941%2043.2515%2042.4941C46.3564%2042.5823%2049.9058%2041.8146%2051.821%2039.1569C52.5929%2038.0934%2053.0033%2036.8427%2052.9998%2035.564C53.0217%2033.1848%2051.4339%2031.2297%2049.3044%2030.3147C47.2632%2029.4766%2045.1198%2028.8674%2042.9204%2028.5C42.1107%2028.41%2041.3327%2028.1563%2040.6423%2027.757C39.9039%2027.2597%2040.078%2026.2272%2040.735%2025.7596C42.6084%2024.5207%2045.6299%2025.5545%2045.8608%2027.9032L52.2845%2027.5621C52.1703%2025.768%2051.1844%2024.0545%2049.6356%2022.9583C47.6987%2021.8887%2045.4532%2021.3874%2043.1986%2021.5212C41.3493%2021.4527%2039.5037%2021.7218%2037.7682%2022.3128C35.6082%2023.1125%2033.829%2025.064%2033.8344%2027.4525C33.7931%2028.9377%2034.5158%2030.4088%2035.755%2031.3621C37.6454%2032.6238%2039.8325%2033.4582%2042.139%2033.798C43.3833%2033.9637%2044.5727%2034.3795%2045.6224%2035.0159C46.5878%2035.7309%2046.5807%2037.167%2045.5959%2037.8903C44.5078%2038.6532%2042.9034%2038.7416%2041.6818%2038.2468C40.3717%2037.716%2039.6048%2036.4784%2039.4768%2035.089Z'%20fill='%23FFB749'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5701_38384'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
function Footer() {
  const [mounted, setMounted] = useState(false);
  const { t: t2 } = useTranslation();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsx("footer", { className: "bottom-0 w-full bg-pink-200 px-8 py-2", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full  flex items-center justify-between overflow-y-auto pt-0", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://github.com/ViktoriiaPet/rest-client-app",
        target: "_blank",
        rel: "noreferrer",
        className: "text-purple-600 font-bold text-center text-l mb-2 mt-2  hover:text-yellow-100 transition-colors",
        children: t2("app.github")
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "text-purple-600 font-bold text-center text-l mb-2 mt-2", children: "2025" }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://rs.school/courses/reactjs",
        target: "_blank",
        rel: "noreferrer",
        children: /* @__PURE__ */ jsx("img", { className: "w-[40px]", src: rssLogo, alt: "rss logo" })
      }
    )
  ] }) });
}
function getLangFromCookie() {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|; )lang=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "en";
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-pink-400 data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
const initialState = {
  lang: typeof window !== "undefined" && localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "en"
};
const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.lang = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("i18nextLng", action.payload);
      }
    },
    loadLanguageFromStorage(state) {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("lang");
        state.lang = saved ?? "en";
      }
    }
  }
});
const { setLanguage } = languageSlice.actions;
const languageReducer = languageSlice.reducer;
const DEFAULT_LANG = getLangFromCookie();
function LangToggle({
  initialLang = DEFAULT_LANG
}) {
  const dispatch = useDispatch();
  const lang2 = useSelector((state) => state.language.lang);
  const { t: t2, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const cookieLang = getLangFromCookie();
    if (cookieLang && cookieLang !== lang2) {
      dispatch(setLanguage(cookieLang));
      void i18n.changeLanguage(cookieLang);
    }
    setMounted(true);
  }, [dispatch, i18n, lang2]);
  const ssrT = (key) => typeof window === "undefined" ? i18n.getFixedT(initialLang)(key) : t2(key);
  useEffect(() => {
    void i18n.changeLanguage(lang2 ?? "en");
  }, [lang2, i18n]);
  const changeLanguage = () => {
    const newLang = lang2 === "en" ? "ru" : "en";
    dispatch(setLanguage(newLang));
    if (typeof document !== "undefined") {
      document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
    }
    void i18n.changeLanguage(newLang);
    if (window.location.pathname === "/auth/clientHistory") {
      window.location.reload();
    }
  };
  if (!mounted) return null;
  const isEnglishSSR = lang2 === "en";
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-3 items-center w-full justify-center", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `w-1/3 flex justify-end ${isEnglishSSR ? "text-pink-600 font-bold" : "text-pink-300 font-semibold"}`,
        children: ssrT("lang.english")
      }
    ),
    /* @__PURE__ */ jsx(Switch, { onClick: changeLanguage, checked: lang2 === "ru" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `w-1/3 flex ${isEnglishSSR ? "text-pink-300 font-semibold w-1/3" : "text-pink-600 font-bold w-1/3"}`,
        children: ssrT("lang.russian")
      }
    )
  ] });
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        custom: "bg-pink-300 text-purple-600 shadow hover:bg-lavender-500 hover:bg-yellow-100"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-[14px]",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const SignButton = ({ text }) => {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsx(Button, { variant: "custom", children: t2(text) });
};
function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef(null);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const THRESHOLD = 8;
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        setScrolled(y > THRESHOLD);
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
  const reduceMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const { t: t2, ready } = useTranslation();
  const { user, setUser, setToken } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const { logout: logout2 } = await Promise.resolve().then(() => firebase);
      await logout2();
      setUser(null);
      setToken(null);
      void navigate("/");
    } catch (err) {
      console.error("Log error", err);
    }
  };
  if (!mounted) return null;
  if (!ready) return null;
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 w-full ", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `sticky top-0  py-2 z-50 w-full backdrop-blur-sm  px-8 py-2 ${reduceMotion ? "" : "transition-all duration-300 ease-in-out"} ` + (scrolled ? "bg-white/80 border-b border-pink-300 shadow-md" : "bg-transparent border-b-0"),
      children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-row justify-between items-center", children: [
        /* @__PURE__ */ jsx(NavLink, { to: "/", end: true, children: /* @__PURE__ */ jsx("img", { src: "/app-logo.svg", width: "60", height: "60" }) }),
        /* @__PURE__ */ jsx("div", { className: "w-[300px] flex items-center justify-center", children: /* @__PURE__ */ jsx(LangToggle, {}) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center  w-[300px] gap-2", children: user ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Button, { variant: "custom", onClick: handleLogout, children: t2("auth.logOut") }),
          /* @__PURE__ */ jsx(NavLink, { to: "/mainClint", end: true, className: "w-1/2", children: /* @__PURE__ */ jsx(Button, { variant: "custom", children: t2("app.mainPage") }) })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(NavLink, { to: "/signIn", end: true, className: "w-1/2 flex justify-end ", children: /* @__PURE__ */ jsx(SignButton, { text: "auth.signIn" }) }),
          /* @__PURE__ */ jsx(NavLink, { to: "/signUp", end: true, className: "w-1/2", children: /* @__PURE__ */ jsx(SignButton, { text: "auth.signUp" }) })
        ] }) })
      ] })
    }
  ) });
}
const store = configureStore({
  reducer: {
    language: languageReducer
  }
});
function links() {
  return [{
    rel: "stylesheet",
    href: "./App.css?url"
  }];
}
const root = UNSAFE_withComponentProps(function Root() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = initAuthWatcher(navigate);
    return () => {
      unsubscribe();
    };
  }, [navigate]);
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "UTF-8"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx("title", {
        children: "My App"
      })]
    }), /* @__PURE__ */ jsx("body", {
      children: /* @__PURE__ */ jsx(AuthProvider, {
        children: /* @__PURE__ */ jsx(VariablesProvider, {
          children: /* @__PURE__ */ jsx(Provider, {
            store,
            children: /* @__PURE__ */ jsxs("div", {
              className: "bg-pink-100 min-h-screen flex flex-col",
              children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx("main", {
                className: "flex-1 w-full flex flex-col items-center justify-center bg-pink-100 overflow-y-auto px-8 py-6 pt-0",
                children: /* @__PURE__ */ jsx("div", {
                  className: "p-[2vw] w-full min-h-[83dvh] rounded-2xl bg-pink-200 flex flex-col items-stretch box-border",
                  children: /* @__PURE__ */ jsx(ErrorBoundary$1, {
                    children: /* @__PURE__ */ jsx(Outlet, {})
                  })
                })
              }), /* @__PURE__ */ jsx(Scripts, {}), /* @__PURE__ */ jsx(Footer, {})]
            })
          })
        })
      })
    })]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const darya = "/assets/Darya-Cy8thGTo.jpg";
const alyona = "/assets/alyona-COSDz4be.jpg";
const vika = "/assets/vika-CwH6O9av.jpg";
const home = UNSAFE_withComponentProps(function HomePage() {
  const {
    t: t2
  } = useTranslation();
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (user) {
      void navigate("/mainClint");
    }
  }, [user, navigate]);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs("div", {
    className: "p-[5vw] flex flex-col align-middle justify-center items-center",
    children: [/* @__PURE__ */ jsx("div", {
      className: "text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]",
      children: t2("auth.welcome")
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-row mb-[3vw] gap-[2vw] items-stretch\r\n                [&>div]:flex-1 [&>div]:basis-0 [&>div]:min-w-0",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex flex-col border border-purple-600 p-[2vw] rounded-lg",
        children: [/* @__PURE__ */ jsx("img", {
          src: vika,
          alt: t2("aboutVika.photoAlt"),
          className: "block w-[200px] h-[200px] object-cover mx-auto rounded-lg"
        }), /* @__PURE__ */ jsx("div", {
          className: "text-purple-600 font-bold text-center text-xl mb-2 mt-2",
          children: t2("aboutVika.name")
        }), /* @__PURE__ */ jsx("div", {
          className: "mb-2",
          children: t2("aboutVika.text")
        }), /* @__PURE__ */ jsx("a", {
          href: "https://github.com/ViktoriiaPet",
          target: "_blank",
          rel: "noreferrer",
          className: "text-purple-600 font-bold text-center text-l mb-2 mt-auto",
          children: /* @__PURE__ */ jsx(Button, {
            variant: "custom",
            children: t2("aboutVika.linkGitHub")
          })
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col border  border-purple-600 p-[2vw] rounded-lg",
        children: [/* @__PURE__ */ jsx("img", {
          src: darya,
          alt: t2("aboutDarya.photoAlt"),
          className: "block w-[200px] h-[200px] object-cover mx-auto rounded-lg"
        }), /* @__PURE__ */ jsx("div", {
          className: "text-purple-600 font-bold text-center text-xl mb-2 mt-2",
          children: t2("aboutDarya.name")
        }), /* @__PURE__ */ jsx("div", {
          className: "mb-2",
          children: t2("aboutDarya.text")
        }), /* @__PURE__ */ jsx("a", {
          href: "https://github.com/darinadaniuk/rs_react",
          target: "_blank",
          rel: "noreferrer",
          className: "text-purple-600 font-bold text-center text-l mb-2 mt-auto",
          children: /* @__PURE__ */ jsx(Button, {
            variant: "custom",
            children: t2("aboutDarya.linkGitHub")
          })
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col border border-purple-600 p-[2vw] rounded-lg",
        children: [/* @__PURE__ */ jsx("img", {
          src: alyona,
          alt: t2("aboutAlyona.photoAlt"),
          className: "block w-[200px] h-[200px] object-cover mx-auto rounded-lg"
        }), /* @__PURE__ */ jsx("div", {
          className: "text-purple-600 font-bold text-center text-xl mb-2 mt-2",
          children: t2("aboutAlyona.name")
        }), /* @__PURE__ */ jsx("div", {
          className: "mb-2",
          children: t2("aboutAlyona.text")
        }), /* @__PURE__ */ jsx("a", {
          href: "https://github.com/alyona317",
          target: "_blank",
          rel: "noreferrer",
          className: "text-purple-600 font-bold text-center text-l mb-2 mt-auto",
          children: /* @__PURE__ */ jsx(Button, {
            variant: "custom",
            children: t2("aboutAlyona.linkGitHub")
          })
        })]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "text-sm space-y-4 mb-4",
      children: /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsxs("p", {
          children: [t2("info.projectText"), " ", /* @__PURE__ */ jsx("a", {
            href: "https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/final.md",
            className: "text-purple-600 font-bold text-center",
            target: "_blank",
            rel: "noopener noreferrer",
            children: t2("info.projectLink")
          })]
        }), /* @__PURE__ */ jsxs("p", {
          children: [t2("info.courseText"), " ", /* @__PURE__ */ jsx("a", {
            href: "https://rs.school/courses/reactjs",
            className: "text-purple-600 font-bold text-center",
            target: "_blank",
            rel: "noopener noreferrer",
            children: t2("info.courseLink")
          })]
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-row gap-[5vw] justify-around",
      children: [/* @__PURE__ */ jsx(NavLink, {
        to: "/signIn",
        end: true,
        children: /* @__PURE__ */ jsx(SignButton, {
          text: "auth.signIn"
        })
      }), /* @__PURE__ */ jsx(NavLink, {
        to: "/signUp",
        end: true,
        children: /* @__PURE__ */ jsx(SignButton, {
          text: "auth.signUp"
        })
      })]
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const layout = UNSAFE_withComponentProps(function Root2() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: layout
}, Symbol.toStringTag, { value: "Module" }));
const authClientPage = UNSAFE_withComponentProps(function AuthorizedUserPage() {
  const [mounted, setMounted] = useState(false);
  const {
    t: t2
  } = useTranslation();
  const {
    user,
    loading
  } = useAuth();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  if (loading) return /* @__PURE__ */ jsx("div", {
    children: t2("app.loading")
  });
  if (!user) return /* @__PURE__ */ jsx(Navigate, {
    to: "/",
    replace: true
  });
  return /* @__PURE__ */ jsxs("nav", {
    className: "p-[5vw] text-center flex flex-col items-center gap-3",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "text-[46px] tracking-[1vw] text-purple-600 pb-[2vw]",
      children: [t2("auth.welcome"), ", ", user.displayName]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-row mb-[3vw] gap-[2vw] items-stretch\r\n                [&>div]:flex-1 [&>div]:basis-0 [&>div]:min-w-0",
      children: [/* @__PURE__ */ jsx(NavLink, {
        className: "bg-pink-300 text-purple-600 shadow-md rounded-lg px-6 py-3 inline-block transition-colors duration-300 ease-in-out hover:bg-lavender-500 hover:bg-yellow-100 font-semibold",
        to: "/auth/restfull",
        end: true,
        children: /* @__PURE__ */ jsx("div", {
          children: t2("clientPage.restfull")
        })
      }), /* @__PURE__ */ jsx(NavLink, {
        className: "bg-pink-300 text-purple-600 shadow-md rounded-lg px-6 py-3 inline-block transition-colors duration-300 ease-in-out hover:bg-lavender-500 hover:bg-yellow-100 font-semibold",
        to: "/auth/clientVariales",
        end: true,
        children: /* @__PURE__ */ jsx("div", {
          children: t2("clientPage.variables")
        })
      }), /* @__PURE__ */ jsx(NavLink, {
        className: "bg-pink-300 text-purple-600 shadow-md rounded-lg px-6 py-3 inline-block transition-colors duration-300 ease-in-out hover:bg-lavender-500 hover:bg-yellow-100 font-semibold",
        to: "/auth/clientHistory",
        end: true,
        children: /* @__PURE__ */ jsx("div", {
          children: t2("clientPage.history")
        })
      })]
    }), /* @__PURE__ */ jsx(Outlet, {})]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: authClientPage
}, Symbol.toStringTag, { value: "Module" }));
const getRegistrationSchema = () => z.object({
  username: z.string().min(1, t("validation.usernameRequired")).regex(/^[A-Za-zА-Яа-яЁё]+$/, t("validation.usernameLetters")),
  email: z.email(t("validation.emailInvalid")),
  password: z.string().regex(
    new RegExp("^(?=.*\\p{L})(?=.*\\d)(?=.*[^\\p{L}\\d]).{8,}$", "u"),
    t("validation.passwordInvalid")
  )
});
const getLoginSchema = () => z.object({
  email: z.email(t("validation.emailInvalid")),
  password: z.string().regex(
    new RegExp("^(?=.*\\p{L})(?=.*\\d)(?=.*[^\\p{L}\\d]).{8,}$", "u"),
    t("validation.passwordInvalid")
  )
});
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
function ErrorModal({
  isOpen,
  onClose,
  message
}) {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "w-[300px] p-4 text-center", children: [
    /* @__PURE__ */ jsx(DialogTitle, { className: "text-purple-600", children: t2("buttons.error") }),
    /* @__PURE__ */ jsx(DialogDescription, { children: message }),
    /* @__PURE__ */ jsx(Button, { className: "mt-4", variant: "custom", onClick: onClose, children: t2("buttons.close") })
  ] }) });
}
const signIn = UNSAFE_withComponentProps(function SignIn() {
  const {
    t: t2
  } = useTranslation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [, setSubmitted] = useState(false);
  const {
    user,
    token,
    setUser,
    setToken
  } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const showError = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };
  useEffect(() => {
    if (user) {
      void navigate("/mainClint");
    }
  }, [user, navigate]);
  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    const schema = getLoginSchema();
    const result = schema.safeParse({
      ...formData,
      [name]: value
    });
    if (result.success) {
      setErrors((prev) => ({
        ...prev,
        [name]: void 0
      }));
    } else {
      const fieldError = result.error.issues.find((issue) => issue.path[0] === name);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError ? fieldError.message : void 0
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const schema = getLoginSchema();
    const result = schema.safeParse(formData);
    if (result.success) {
      setErrors({});
      try {
        const res = await logInWithEmailAndPassword(formData.email, formData.password);
        if (res) {
          setUser(res.user);
          setToken(res.token);
          document.cookie = `userToken=${res.token}; path=/; max-age=3600; samesite=lax;`;
          document.cookie = `userId=${res.user.uid}; path=/; max-age=3600; samesite=lax;`;
          void navigate("/mainClint");
        }
      } catch (err) {
        if (err instanceof FirebaseError) {
          showError(err.message);
          console.error("Firebase error:", err);
        } else if (err instanceof Error) {
          if (err.message.includes("setUser must be used within AuthProvider")) {
            console.warn("Internal React hook error, ignoring for modal:", err);
          } else {
            showError(err.message);
          }
          console.error("JS error:", err);
        } else {
          showError("Unknown error");
          console.error("Unknown error:", err);
        }
      }
    } else {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0]] = issue.message;
        }
      });
      setErrors(fieldErrors);
    }
  };
  useEffect(() => {
  }, [user, token]);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs("form", {
    onSubmit: handleSubmit,
    className: "form-position  text-purple-600  flex flex-col items-center",
    children: [/* @__PURE__ */ jsx(ErrorModal, {
      isOpen: isModalOpen,
      onClose: () => setIsModalOpen(false),
      message: modalMessage
    }), /* @__PURE__ */ jsx("h2", {
      className: "pb-[3vw] font-inter text-xl text-purple-600",
      children: t2("auth.signIn")
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col items-center p-[5vw] w-[550px] gap-[1vw] rounded-[15%] border-2 border-purple-300",
      children: [/* @__PURE__ */ jsx("p", {
        className: "errors text-center w-full",
        children: errors.username || ""
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative w-full max-w-[40vw]",
        children: [/* @__PURE__ */ jsx(FaEnvelope, {
          className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400"
        }), /* @__PURE__ */ jsx("input", {
          name: "email",
          placeholder: t2("form.email"),
          value: formData.email,
          onChange: handleChange,
          className: "pl-10 pr-2 text-center bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
        })]
      }), /* @__PURE__ */ jsx("p", {
        className: "errors text-center w-full",
        children: errors.email || ""
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative w-full max-w-[40vw]",
        children: [/* @__PURE__ */ jsx(FaLock, {
          className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400"
        }), /* @__PURE__ */ jsx("input", {
          name: "password",
          type: "password",
          placeholder: t2("form.password"),
          value: formData.password,
          onChange: handleChange,
          className: "pl-10 pr-2 text-center bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
        })]
      }), /* @__PURE__ */ jsx("p", {
        className: "errors text-center w-full",
        children: errors.password || ""
      }), /* @__PURE__ */ jsx("div", {
        className: "buttons-block pt-[3vw]",
        children: /* @__PURE__ */ jsx(Button, {
          variant: "custom",
          type: "submit",
          children: t2("form.submit")
        })
      })]
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: signIn
}, Symbol.toStringTag, { value: "Module" }));
const signUp = UNSAFE_withComponentProps(function SignUp() {
  const {
    t: t2
  } = useTranslation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [, setSubmitted] = useState(false);
  const {
    setUser,
    setToken,
    user
  } = useAuth();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const showError = (msg) => {
    setModalMessage(msg);
    setIsModalOpen(true);
  };
  useEffect(() => {
    if (user) {
      void navigate("/mainClint");
    }
  }, [user, navigate]);
  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    const schema = getRegistrationSchema();
    const result = schema.safeParse({
      ...formData,
      [name]: value
    });
    if (result.success) {
      setErrors((prev) => ({
        ...prev,
        [name]: void 0
      }));
    } else {
      const fieldError = result.error.issues.find((issue) => issue.path[0] === name);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError ? fieldError.message : void 0
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const schema = getRegistrationSchema();
    const result = schema.safeParse(formData);
    if (result.success) {
      setErrors({});
      try {
        const res = await registerWithEmailAndPassword(formData.username, formData.email, formData.password);
        if (res) {
          setUser(res.user);
          setToken(res.token);
          document.cookie = `userToken=${res.token}; path=/; max-age=3600; samesite=lax;`;
          document.cookie = `userId=${res.user.uid}; path=/; max-age=3600; samesite=lax;`;
          void navigate("/mainClint");
        }
      } catch (err) {
        if (err instanceof FirebaseError) {
          showError(err.message);
          console.error("Firebase error:", err);
        } else if (err instanceof Error) {
          if (err.message.includes("setUser must be used within AuthProvider")) {
            console.warn("Internal React hook error, ignoring for modal:", err);
          } else {
            showError(err.message);
          }
          console.error("JS error:", err);
        } else {
          showError("Unknown error");
          console.error("Unknown error:", err);
        }
      }
    } else {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        const typedIssue = issue;
        if (typedIssue.path[0]) {
          fieldErrors[typedIssue.path[0]] = typedIssue.message;
        }
      });
      setErrors(fieldErrors);
    }
  };
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs("form", {
    onSubmit: handleSubmit,
    className: "form-position  text-purple-600  flex flex-col items-center",
    children: [/* @__PURE__ */ jsx(ErrorModal, {
      isOpen: isModalOpen,
      onClose: () => setIsModalOpen(false),
      message: modalMessage
    }), /* @__PURE__ */ jsx("h2", {
      className: "pb-[3vw] font-inter text-xl text-purple-600",
      children: t2("auth.signUp")
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col items-center p-[5vw] w-[550px] gap-[1vw] rounded-[15%] border-2 border-purple-300",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "relative w-full max-w-[40vw]",
        children: [/* @__PURE__ */ jsx(FaUser, {
          className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400"
        }), /* @__PURE__ */ jsx("input", {
          name: "username",
          placeholder: t2("form.name"),
          value: formData.username,
          onChange: handleChange,
          className: "pl-10 pr-2 bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
        })]
      }), /* @__PURE__ */ jsx("p", {
        className: "errors text-center w-full",
        children: errors.username || ""
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative w-full max-w-[40vw]",
        children: [/* @__PURE__ */ jsx(FaEnvelope, {
          className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400"
        }), /* @__PURE__ */ jsx("input", {
          name: "email",
          placeholder: t2("form.email"),
          value: formData.email,
          onChange: handleChange,
          className: "pl-10 pr-2 w-full bg-transparent border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
        })]
      }), /* @__PURE__ */ jsx("p", {
        className: "errors text-center w-full",
        children: errors.email || ""
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative w-full max-w-[40vw]",
        children: [/* @__PURE__ */ jsx(FaLock, {
          className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400"
        }), /* @__PURE__ */ jsx("input", {
          name: "password",
          type: "password",
          placeholder: t2("form.password"),
          value: formData.password,
          onChange: handleChange,
          className: "pl-10 pr-2 bg-transparent w-full border-b border-purple-400 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
        })]
      }), /* @__PURE__ */ jsx("p", {
        className: "errors text-center w-full",
        children: errors.password || ""
      }), /* @__PURE__ */ jsxs("div", {
        className: "buttons-block pt-[3vw]",
        children: [/* @__PURE__ */ jsx(Button, {
          variant: "custom",
          className: "mr-[2vw]",
          type: "submit",
          children: t2("form.submit")
        }), /* @__PURE__ */ jsx(NavLink, {
          to: "/signIn",
          end: true,
          children: /* @__PURE__ */ jsx(Button, {
            variant: "custom",
            type: "button",
            children: t2("auth.isAccount")
          })
        })]
      })]
    })]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: signUp
}, Symbol.toStringTag, { value: "Module" }));
const Loader = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-full h-full py-6", children: /* @__PURE__ */ jsxs("div", { className: "relative w-12 h-12", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute w-full h-full border-4 border-pink-300 rounded-full animate-spin border-t-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-2 border-4 border- lavender-00 rounded-full animate-pulse border-b-transparent" })
  ] }) });
};
const TableRow = React__default.lazy(() => import("./TableRow-DO84HTVV.js"));
const VariablesAddBar = React__default.lazy(() => import("./VariablesAddBar-DQlsUPjv.js"));
const variables = UNSAFE_withComponentProps(function VariablesPage() {
  const {
    t: t2
  } = useTranslation();
  const {
    user,
    loading
  } = useAuth();
  const {
    variables: variables2,
    setVariables
  } = useVariables();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const deleteVariable = (key) => {
    const newVariables = Object.fromEntries(Object.entries(variables2).filter(([k]) => k !== key));
    setVariables(newVariables);
  };
  const addVariable = (key, value) => {
    const newVariables = {
      ...variables2,
      [key]: value
    };
    setVariables(newVariables);
  };
  if (!mounted) return /* @__PURE__ */ jsx(Fragment, {});
  if (loading) return /* @__PURE__ */ jsx("div", {
    children: t2("app.loading")
  });
  if (!user) return /* @__PURE__ */ jsx(Navigate$1, {
    to: "/",
    replace: true
  });
  return /* @__PURE__ */ jsx("div", {
    className: "p-[5vw] flex flex-col align-middle justify-center items-centerl",
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsxs(Suspense, {
        fallback: /* @__PURE__ */ jsx(Loader, {}),
        children: [/* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-3 gap-4 mb-4 items-center  w-ful",
          children: /* @__PURE__ */ jsx(VariablesAddBar, {
            onAdd: addVariable
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "flex flex-col gap-5",
          children: Object.entries(variables2).map(([name, value]) => /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(TableRow, {
              name,
              value,
              onClick: () => deleteVariable(name)
            })
          }, name))
        })]
      })
    })
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: variables
}, Symbol.toStringTag, { value: "Module" }));
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
  } catch {
    return null;
  }
};
const toBase64Json = (value) => btoa(encodeURIComponent(JSON.stringify(value)).replace(/%([0-9A-F]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16))));
const toStringRecord = (obj) => Object.fromEntries(Object.entries(obj ?? {}).map(([k, v]) => [k, String(v)]));
const translations = {
  en: {
    status: "Status Code",
    method: "Method",
    url: "URL",
    created: "Created At",
    duration: "Duration",
    reqSize: "Request size",
    resSize: "Response size",
    error: "Error info",
    empty: "No requests recorded yet."
  },
  ru: {
    status: "Код статуса",
    method: "Метод",
    url: "Ссылка",
    created: "Создано",
    duration: "Длительность",
    reqSize: "Размер запроса",
    resSize: "Размер ответа",
    error: "Информация об ошибке",
    empty: "Записей пока нет."
  }
};
const loader = async ({
  request: request2
}) => {
  const cookies = cookie.parse(request2?.headers.get("cookie") ?? "");
  const token = cookies.userToken ?? null;
  const userId = token ? parseJwt(token)?.user_id : null;
  const cookieLang = cookies.lang;
  const headerLang = request2?.headers.get("accept-language")?.split(",")[0];
  const lang2 = cookieLang && (cookieLang === "ru" ? "ru" : "en") || (headerLang?.startsWith("ru") ? "ru" : "en");
  const t2 = translations[lang2];
  const snap = await getDocs(query(collection(db, "requests").withConverter({
    fromFirestore: (s) => s.data(),
    toFirestore: (d) => ({
      ...d
    })
  }), ...userId ? [where("userId", "==", userId)] : [], orderBy("createdAt", "desc"), limit(userId ? 50 : 25)));
  const rowsHtml = snap.docs.map((doc) => {
    const d = doc.data();
    const prefill = {
      method: d.method ?? "GET",
      url: d.url ?? "",
      headers: toStringRecord(d.headers),
      params: toStringRecord(d.params),
      bodyMode: d.bodyMode ?? "none",
      bodyText: d.bodyPreview ?? ""
    };
    const href = `/auth/restfull?prefill=${encodeURIComponent(toBase64Json(prefill))}`;
    return `
      <tr class="hover:bg-amber-50">
        <td class="px-4 py-2 border-b text-purple-600">${d.statusCode ?? ""}</td>
        <td class="px-4 py-2 border-b font-medium text-purple-600">${d.method ?? ""}</td>
        <td class="px-4 py-2 border-b text-purple-600">
          <a href="${href}" title="${d.url ?? ""}" class="underline text-blue-600 truncate">${d.url ?? ""}</a>
        </td>
                <td class="px-4 py-2 border-b text-purple-600">${d.createdAt ? d.createdAt instanceof Date ? d.createdAt.toISOString() : d.createdAt.toDate?.()?.toISOString() ?? "" : ""}</td>
        <td class="px-4 py-2 border-b text-purple-600">${d.latencyMs ?? ""}</td>
        <td class="px-4 py-2 border-b text-purple-600">${d.requestBytes ?? ""}</td>
        <td class="px-4 py-2 border-b text-purple-600">${d.responseBytes ?? ""}</td>
        <td class="px-4 py-2 border-b text-purple-600">${d.statusText ?? ""}</td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="8" class="px-4 py-2 text-center text-gray-500">No requests recorded yet.</td></tr>`;
  return {
    tableHtml: `
      <div class="overflow-x-auto">
        <table class="min-w-full border border-gray-300 rounded-md border-separate" style="border-spacing:0">
          <thead class="bg-pink-300">
            <tr>
              <th class="px-4 py-2 border-b text-purple-800">${t2.status}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t2.method}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t2.url}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t2.created}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t2.duration}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t2.reqSize}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t2.resSize}</th>
              <th class="px-4 py-2 border-b text-purple-800">${t2.error}</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    `
  };
};
const _LazyPage = lazy(async () => ({
  default: (props) => /* @__PURE__ */ jsx("div", {
    dangerouslySetInnerHTML: {
      __html: props.loaderData.tableHtml
    }
  })
}));
const history = UNSAFE_withComponentProps(function HistoryPage(props) {
  return /* @__PURE__ */ jsx(Suspense, {
    fallback: /* @__PURE__ */ jsx("div", {
      children: "Loading..."
    }),
    children: /* @__PURE__ */ jsx(_LazyPage, {
      loaderData: props.loaderData
    })
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: history,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const DEFAULT_METHODS = [
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "HEAD",
  "OPTIONS"
];
function toRecord(rows) {
  return Object.fromEntries(
    rows.filter((r) => r.enabled && r.key).map((r) => [r.key, r.value])
  );
}
function hasHeader(headers, key) {
  const needle = key.toLowerCase();
  return Object.keys(headers).some((k) => k.toLowerCase() === needle);
}
function base64UrlEncode(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function base64UrlDecode(value) {
  if (!value) return "";
  const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}
function buildClientUrl({
  method,
  url,
  headers = {}
}) {
  const normalizedMethod = (method || "GET").toUpperCase();
  const encodedUrl = base64UrlEncode(url || "");
  const query2 = new URLSearchParams(
    Object.entries(headers).filter(([key]) => !!key)
  );
  const qs = query2.toString();
  return `/auth/restfull/${normalizedMethod}/${encodedUrl}${qs ? `?${qs}` : ""}`;
}
function parseClientUrl(params) {
  return {
    method: (params.method || "GET").toUpperCase(),
    url: base64UrlDecode(params.urlB64),
    headers: Object.fromEntries(
      new URLSearchParams(params.search || "")
    )
  };
}
const RestFullClient = lazy(() => import("./RestFullClient-DZLGmEv9.js"));
const isHttpMethod = (value) => typeof value === "string" && DEFAULT_METHODS.includes(value.toUpperCase());
const restfull = UNSAFE_withComponentProps(function Restfull() {
  const {
    t: t2
  } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const {
    user,
    loading
  } = useAuth();
  const {
    method: methodParam,
    urlB64
  } = useParams();
  const {
    search
  } = useLocation();
  const navigate = useNavigate$1();
  useEffect(() => {
    setMounted(true);
  }, []);
  const parsed = useMemo(() => parseClientUrl({
    method: methodParam,
    urlB64,
    search
  }), [methodParam, urlB64, search]);
  const currentMethod = isHttpMethod(parsed.method) ? parsed.method : "GET";
  useEffect(() => {
    if (!loading && user && !isHttpMethod(parsed.method)) {
      navigate(buildClientUrl({
        method: "GET",
        url: parsed.url,
        headers: parsed.headers
      }), {
        replace: true
      });
    }
  }, [loading, user, parsed.method, parsed.url, parsed.headers, navigate]);
  const handleChange = useCallback(({
    method
  }) => {
    const next = method.toUpperCase();
    if (next !== currentMethod) {
      const path = `/auth/restfull/${next}${urlB64 ? `/${urlB64}` : ""}${search}`;
      navigate(path, {
        replace: true
      });
    }
  }, [navigate, currentMethod, urlB64, search]);
  if (!mounted) return /* @__PURE__ */ jsx(Fragment, {});
  if (loading) return /* @__PURE__ */ jsx("div", {
    children: t2("app.loading")
  });
  if (!user) return /* @__PURE__ */ jsx(Navigate$1, {
    to: "/",
    replace: true
  });
  return /* @__PURE__ */ jsx("div", {
    className: "w-full",
    children: /* @__PURE__ */ jsx(Suspense, {
      fallback: /* @__PURE__ */ jsxs("div", {
        className: "hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md",
        children: [t2("app.loading"), " ", /* @__PURE__ */ jsx(Loader, {})]
      }),
      children: /* @__PURE__ */ jsx(RestFullClient, {
        method: currentMethod,
        onChange: handleChange
      })
    })
  });
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: restfull
}, Symbol.toStringTag, { value: "Module" }));
const notFound = UNSAFE_withComponentProps(function NotFound() {
  const navigate = useNavigate$1();
  const {
    t: t2
  } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return /* @__PURE__ */ jsx(Fragment, {});
  return /* @__PURE__ */ jsx("main", {
    className: "grid min-h-[80svh] place-items-center px-4",
    children: /* @__PURE__ */ jsxs("section", {
      className: "mx-auto max-w-xl p-8 text-center space-y-4",
      children: [/* @__PURE__ */ jsx("img", {
        src: "/ice-cream.svg",
        alt: "not-found",
        className: "mx-auto w-80 h-80"
      }), /* @__PURE__ */ jsx("h2", {
        className: "text-3xl font-bold",
        children: t2("notFound.title")
      }), /* @__PURE__ */ jsx("p", {
        className: "opacity-80",
        children: t2("notFound.description")
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex gap-3 justify-center",
        children: [/* @__PURE__ */ jsx("button", {
          className: "hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md",
          onClick: () => navigate(-1),
          children: t2("notFound.back")
        }), /* @__PURE__ */ jsx(Link, {
          className: "hover:bg-yellow-100 bg-pink-300 text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md",
          to: "/",
          children: t2("notFound.home")
        })]
      })]
    })
  });
});
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: notFound
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DVkykgpK.js", "imports": ["/assets/chunk-B7RQU5TL-DOPFqT0B.js", "/assets/index-BVdamgSP.js"], "css": ["/assets/entry-CUsU0rID.css"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/root-tU4F3g31.js", "imports": ["/assets/chunk-B7RQU5TL-DOPFqT0B.js", "/assets/index-BVdamgSP.js", "/assets/AuthContext-B8r0X3Wy.js", "/assets/firebase-_GfKOiAI.js", "/assets/VariablesContext-BypoBErZ.js", "/assets/i18next-Bhq85MQn.js", "/assets/useTranslation-0WW_tMsO.js", "/assets/index-DSc-_UGc.js", "/assets/button-B9xj3Fbv.js", "/assets/index-Bi7rVS4R.js", "/assets/SignButton-CNXYMYwp.js", "/assets/index.esm-BE3Wjq2f.js"], "css": ["/assets/entry-CUsU0rID.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/home": { "id": "pages/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-DHBN3ntk.js", "imports": ["/assets/chunk-B7RQU5TL-DOPFqT0B.js", "/assets/SignButton-CNXYMYwp.js", "/assets/button-B9xj3Fbv.js", "/assets/AuthContext-B8r0X3Wy.js", "/assets/useTranslation-0WW_tMsO.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "layouts/layout": { "id": "layouts/layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/layout-zVbj5zqF.js", "imports": ["/assets/chunk-B7RQU5TL-DOPFqT0B.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/authClientPage": { "id": "pages/authClientPage", "parentId": "layouts/layout", "path": "mainClint", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/authClientPage-gYso8KZv.js", "imports": ["/assets/chunk-B7RQU5TL-DOPFqT0B.js", "/assets/AuthContext-B8r0X3Wy.js", "/assets/useTranslation-0WW_tMsO.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/signIn": { "id": "pages/signIn", "parentId": "layouts/layout", "path": "signIn", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/signIn-B6cDzAl9.js", "imports": ["/assets/chunk-B7RQU5TL-DOPFqT0B.js", "/assets/modal-snOD3Bw2.js", "/assets/firebase-_GfKOiAI.js", "/assets/button-B9xj3Fbv.js", "/assets/AuthContext-B8r0X3Wy.js", "/assets/useTranslation-0WW_tMsO.js", "/assets/index.esm-BE3Wjq2f.js", "/assets/i18next-Bhq85MQn.js", "/assets/x-DuRsou1H.js", "/assets/index-DSc-_UGc.js", "/assets/index-BVdamgSP.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/signUp": { "id": "pages/signUp", "parentId": "layouts/layout", "path": "signUp", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/signUp-Czf7pEXi.js", "imports": ["/assets/chunk-B7RQU5TL-DOPFqT0B.js", "/assets/modal-snOD3Bw2.js", "/assets/firebase-_GfKOiAI.js", "/assets/button-B9xj3Fbv.js", "/assets/AuthContext-B8r0X3Wy.js", "/assets/useTranslation-0WW_tMsO.js", "/assets/index.esm-BE3Wjq2f.js", "/assets/i18next-Bhq85MQn.js", "/assets/x-DuRsou1H.js", "/assets/index-DSc-_UGc.js", "/assets/index-BVdamgSP.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/variables": { "id": "pages/variables", "parentId": "layouts/layout", "path": "auth/clientVariales", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/variables-CtmjYOCZ.js", "imports": ["/assets/AuthContext-B8r0X3Wy.js", "/assets/chunk-B7RQU5TL-DOPFqT0B.js", "/assets/VariablesContext-BypoBErZ.js", "/assets/Loader-DFBC2RZ3.js", "/assets/useTranslation-0WW_tMsO.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/history": { "id": "pages/history", "parentId": "layouts/layout", "path": "auth/clientHistory", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/history-CdA2hWHS.js", "imports": ["/assets/chunk-B7RQU5TL-DOPFqT0B.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/restfull": { "id": "pages/restfull", "parentId": "layouts/layout", "path": "auth/restfull/:method?/:urlB64?/:bodyB64?", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/restfull-cUEn0UaL.js", "imports": ["/assets/restfull-lst_wffG.js", "/assets/AuthContext-B8r0X3Wy.js", "/assets/chunk-B7RQU5TL-DOPFqT0B.js", "/assets/Loader-DFBC2RZ3.js", "/assets/useTranslation-0WW_tMsO.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "pages/notFound": { "id": "pages/notFound", "parentId": "layouts/layout", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/notFound-c6tKfDfm.js", "imports": ["/assets/chunk-B7RQU5TL-DOPFqT0B.js", "/assets/useTranslation-0WW_tMsO.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-10c7bbdd.js", "version": "10c7bbdd", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "pages/home": {
    id: "pages/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "layouts/layout": {
    id: "layouts/layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "pages/authClientPage": {
    id: "pages/authClientPage",
    parentId: "layouts/layout",
    path: "mainClint",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "pages/signIn": {
    id: "pages/signIn",
    parentId: "layouts/layout",
    path: "signIn",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "pages/signUp": {
    id: "pages/signUp",
    parentId: "layouts/layout",
    path: "signUp",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "pages/variables": {
    id: "pages/variables",
    parentId: "layouts/layout",
    path: "auth/clientVariales",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "pages/history": {
    id: "pages/history",
    parentId: "layouts/layout",
    path: "auth/clientHistory",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "pages/restfull": {
    id: "pages/restfull",
    parentId: "layouts/layout",
    path: "auth/restfull/:method?/:urlB64?/:bodyB64?",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "pages/notFound": {
    id: "pages/notFound",
    parentId: "layouts/layout",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  }
};
export {
  Button as B,
  DEFAULT_METHODS as D,
  assetsBuildDirectory as a,
  buildClientUrl as b,
  cn as c,
  db as d,
  basename as e,
  future as f,
  publicPath as g,
  hasHeader as h,
  isSpaMode as i,
  entry as j,
  routes as k,
  serverManifest as l,
  prerender as p,
  routeDiscovery as r,
  ssr as s,
  toRecord as t,
  useAuth as u
};
