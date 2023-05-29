import { useParams } from "react-router-dom";
import Collapse from "../Components/Collapse";
import Tag from "../Components/Tag";
import datasKasa from "../datas/datasKasa.json"
import "../style/style.css";

export default function Logement() {
  const {id} = useParams()
  const logement = datasKasa.find(logement => logement.id === id);
  if(!logement){
    return <p>Logement non trouvé</p>;
  }
  const {pictures, title, location, tags, description,equipments} = logement;
  return (
    <div>
      <h2>Fiche Logement</h2>
      <Collapse
        collTitle={equipments}
        collText={description}
      />
      <Tag />
    </div>
  );
}
