import { NavLink } from "react-router-dom";
import "../styles/style.css";
import "../styles/LinkError.css";

export default function LinkError() {
  return (
    <NavLink to="/" className="link-error">
      Retourner sur la page d'accueil
    </NavLink>
  );
}
