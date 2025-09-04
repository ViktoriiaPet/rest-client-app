import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import LangToggle from './LangToggle';

export default function Header() {
  const { t } = useTranslation();

  return (
    <nav className="flex flex-row justify-around sticky top-0">
      <NavLink to="/" end>
        <div>Logo</div>
      </NavLink>
      <div>
        <LangToggle />
      </div>
      <NavLink to="/singIn" end>
        <div>{t('SignIn')}</div>
      </NavLink>
      <NavLink to="/singUp" end>
        <div>{t('SignUp')}</div>
      </NavLink>
      <NavLink to="/mainClint" end>
        <div>Authorized user&apos;s page</div>
      </NavLink>
    </nav>
  );
}
