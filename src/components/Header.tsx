import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
import LangToggle from './LangToggle';

export default function Header() {
  const { t, i18n } = useTranslation();

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
        <div>Sing Up</div>
      </NavLink>
      <NavLink to="/mainClint" end>
        <div>Authorized user's page</div>
      </NavLink>
    </nav>
  );
}
