import { NavLink, useParams } from "react-router-dom";
import Collapse from "../Components/Collapse";
import datasKasa from "../datas/datasKasa.json";
import Carrousel from "../Components/Carrousel";
import Rating from "../Components/Rating";
import Tag from "../Components/Tag";
import "../styles/style.css";
import "../styles/Collapse.css";
import "../styles/Tag.css";
import "../styles/fail-logement.css";

export default function Logement() {
  const { id } = useParams();
  const logement = datasKasa.find((logement) => logement.id === id);

  /*   if (!logement) {
    return <Navigate to="/Error" />;
  } */

  if (!logement) {
    return (
      <main className="fail-logement">
        <p>Logement non trouvé</p>
        <NavLink to="/" className="link-error">
          Retourner sur la page d'accueil
        </NavLink>
      </main>
    );
  }

  const {
    pictures,
    title,
    location,
    tags,
    description,
    equipments,
    host,
    rating,
  } = logement;

  return (
    <main>
      <Carrousel images={pictures} />

      <div className="appartement-info">
        <h2>{title}</h2>
        <p>{location}</p>
      </div>

      <div className="flex-mobile">
        <div className="user-info">
          <div className="user">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
          <Rating rating={rating} />
        </div>

        <div className="tag">
          {tags.map((tag, tagId) => (
            <Tag key={tagId} tag={tag} />
          ))}
        </div>
      </div>

      <div className="collapses">
        <Collapse dropDown="Description" collapseContent={description} />
        <Collapse dropDown="Equipements" collapseContent={equipments} />
      </div>
    </main>
  );
}
