import { useParams } from "react-router-dom";
import Collapse from "../Components/Collapse";
import datasKasa from "../datas/datasKasa.json";
import Carrousel from "../Components/Carrousel";
import Rating from "../Components/Rating";
import "../styles/style.css";

export default function Logement() {
  const { id } = useParams();
  const logement = datasKasa.find((logement) => logement.id === id);

  if (!logement) {
    return <p>Logement non trouvé</p>;
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

      <div className="user-info">
        <div className="user">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
        <Rating rating={rating} />
      </div>

      <div className="tag">
        {tags.map((tag, tagId) => (
          <span key={"tag-" + tagId}>{tag}</span>
        ))}
      </div>

      <div className="collapses">
        <Collapse dropDown="Description" collapseContent={description} />
        <Collapse dropDown="Equipements" collapseContent={equipments} />
      </div>
    </main>
  );
}
