import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Card({ cardId, cardTitle, cardCover, cardCoverAlt }) {
  return (
    <article key="id">
      <Link to={`/logement/${cardId}`}>
        <h2>{cardTitle}</h2>
        <img src={cardCover} alt={cardCoverAlt} />
      </Link>
    </article>
  );
}
