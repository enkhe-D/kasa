import { useParams } from "react-router-dom";
import Collapse from "../Components/Collapse";
import datasKasa from "../datas/datasKasa.json"
import Carrousel from "../Components/Carrousel";
import "../style/style.css";
import "../style/Tag.css"

export default function Logement() {
  const {id} = useParams()
  const logement = datasKasa.find(logement => logement.id === id);
  if(!logement){
    return <p>Logement non trouvé</p>;
  }
  const {pictures, title, location, tags, description , equipments} = logement;
  return (
    <>
    <Carrousel images={pictures} />
    <Collapse collTitle={title}/>
    <Collapse CollLocation={location}/>
    <div className="container-tag">
        {tags.map((tag, tagId) => (
          <div className="paraTag" key={'tag-'+ tagId}>
            {tag}
          </div>
        ))}
      </div>
      <Collapse collText={description}/>
    </>
  );
}
