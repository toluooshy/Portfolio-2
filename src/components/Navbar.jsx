import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav-wrapper">
      <nav className="nav">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/papers" className="nav-link">
          Papers
        </NavLink>
      </nav>
    </header>
  );
}
