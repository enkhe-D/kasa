import { NavLink } from "react-router-dom";
import "../styles/style.css";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about">A Propos</NavLink>
    </div>
  );
}
