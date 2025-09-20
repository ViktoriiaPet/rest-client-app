import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getLangFromCookie } from '@/utils/getLangFromCookie';
import type { RootState } from '@/store';
import type { JSX } from 'react';

import { Switch } from '@/components/ui/switch';
import { setLanguage } from '@/store/languageSlice';

const DEFAULT_LANG: 'en' | 'ru' = getLangFromCookie();

export default function LangToggle({
  initialLang = DEFAULT_LANG,
}: {
  initialLang?: 'en' | 'ru';
}): JSX.Element | null {
  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.language.lang);
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const cookieLang = getLangFromCookie();
    if (cookieLang && cookieLang !== lang) {
      dispatch(setLanguage(cookieLang));
      void i18n.changeLanguage(cookieLang);
    }
    setMounted(true);
  }, []);
  const ssrT = (key: 'lang.english' | 'lang.russian') =>
    typeof window === 'undefined' ? i18n.getFixedT(initialLang)(key) : t(key);

  useEffect(() => {
    void i18n.changeLanguage(lang ?? 'en');
  }, [lang]);

  const changeLanguage = (): void => {
    const newLang = lang === 'en' ? 'ru' : 'en';
    dispatch(setLanguage(newLang));

    if (typeof document !== 'undefined') {
      document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
    }

    void i18n.changeLanguage(newLang);

    if (window.location.pathname === '/auth/clientHistory') {
      window.location.reload();
    }
  };
  if (!mounted) return null;

  const isEnglishSSR = lang === 'en';
  return (
    <div className="flex flex-row gap-3 items-center w-full justify-center">
      <div
        className={`w-1/3 flex justify-end ${
          isEnglishSSR
            ? 'text-pink-600 font-bold'
            : 'text-pink-300 font-semibold'
        }`}
      >
        {ssrT('lang.english')}
      </div>
      <Switch onClick={changeLanguage} checked={lang === 'ru'} />
      <div
        className={`w-1/3 flex ${
          isEnglishSSR
            ? 'text-pink-300 font-semibold w-1/3'
            : 'text-pink-600 font-bold w-1/3'
        }`}
      >
        {ssrT('lang.russian')}
      </div>
    </div>
  );
}
