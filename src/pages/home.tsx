import { NavLink } from 'react-router';

export default function HomePage() {
  return (
    <div className="p-[5vw]">
      <div>Start Page (Welcome)</div>
      <NavLink to="/singIn" end>
        <button>Sing In</button>
      </NavLink>
      <NavLink to="/singUp" end>
        <button>Sing Up</button>
      </NavLink>
    </div>
  );
}
