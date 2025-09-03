import { NavLink } from 'react-router';

export default function Header() {
  return (
    <nav className="flex flex-row justify-around sticky top-0">
      <NavLink to="/" end>
        <div>Logo</div>
      </NavLink>
      <div>LangToggle</div>
      <NavLink to="/singIn" end>
        <div>Sing In</div>
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
