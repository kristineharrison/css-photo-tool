import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
      <NavLink to="/" exact className="link-styles">
        Home
      </NavLink>
      <NavLink to="/styles" exact className="link-styles">
        CSS Styles
      </NavLink>
      <NavLink to="/gallery" exact className="link-styles">
        Try it Out
      </NavLink>
    </div>
  );
}
