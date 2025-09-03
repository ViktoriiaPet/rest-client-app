import { NavLink } from "react-router";
import { Outlet } from "react-router";

export default function AuthorizedUserPage() {
    return(
        <nav>
        <NavLink to="/auth/clientVariales" end>
        <div>Variables</div>
        </NavLink>
        <NavLink to="/auth/clientHistory" end>
        <div>History</div>
        </NavLink>
        <Outlet />
        </nav>
    )
}