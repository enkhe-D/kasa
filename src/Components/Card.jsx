import { Link } from "react-router-dom";
import "../style/style.css";
import "../style/Card.css";

export default function Card({ cardId, cardTitle, cardCover, cardCoverAlt }) {
  return (
    <article className="card">
      <Link to={`/logement/${cardId}`}>
        <h2 className="card-title">{cardTitle}</h2>
        <img src={cardCover} alt={cardCoverAlt} className="card-image" />
      </Link>
    </article>
  );
}
