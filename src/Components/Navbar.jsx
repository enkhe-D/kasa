import { NavLink } from "react-router-dom";
import "../style/style.css";
import "../style/Navbar.css";

export default function Navbar() {
  return (
    <div className="container-navbar">
      <NavLink className="nav" to="/">
        Accueil
      </NavLink>

      <NavLink className="nav" to="/about">
        A Propos
      </NavLink>
    </div>
  );
}
