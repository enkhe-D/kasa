import { useParams } from "react-router-dom";
import Collapse from "../Components/Collapse";
import datasKasa from "../datas/datasKasa.json";
import Carrousel from "../Components/Carrousel";
import Rating from "../Components/Rating";
import "../style/style.css";
import "../style/Tag.css";

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
    <>
      <Carrousel images={pictures} />
      <div className="container-infos">
        <div className="info-appart">
          <h2 className="item-appart">{title}</h2>
          <p className="item-appart">{location}</p>
        </div>

        <div className="info-user">
          <p className="name-host">{host.name}</p>
          <img src={host.picture} alt={host.name} className="img-host" />
          <Rating rating={rating} />
        </div>
      </div>

      <div className="container-tag">
        {tags.map((tag, tagId) => (
          <div className="paraTag" key={"tag-" + tagId}>
            {tag}
          </div>
        ))}
      </div>

      <div className="container-collapse">
        <Collapse dropDown="Description" collapseContent={description} />
        <Collapse dropDown="Equipements" collapseContent={equipments} />
      </div>
    </>
  );
}
