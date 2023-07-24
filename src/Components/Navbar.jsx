import { NavLink } from "react-router-dom";
import "../styles/style.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink className="nav" to="/">
        Accueil
      </NavLink>

      <NavLink className="nav" to="/about">
        A Propos
      </NavLink>
    </div>
  );
}
