import { Link } from "react-router-dom";
import "../style/style.css";

export default function Card() {
  return (
    <div>
      <ul className="container-card">
        <Link to="logement">
          <li className="item-card">
            <h2>titre</h2>
          </li>
        </Link>

        <li className="item-card">
          <h2>titre</h2>
        </li>

        <li className="item-card">
          <h2>titre</h2>
        </li>

        <li className="item-card">
          <h2>titre</h2>
        </li>

        <li className="item-card">
          <h2>titre</h2>
        </li>

        <li className="item-card">
          <h2>titre</h2>
        </li>
      </ul>
    </div>
  );
}
