import Collapse from "../Components/Collapse";
import Tag from "../Components/Tag";
import "../style/style.css";

export default function Logement() {
  return (
    <div>
      <h2>Fiche Logement</h2>

      <Collapse
        sousTitre="titreLogement.jsx"
        paraCollapse="mon paragraphe collapse dans Logement.jsx"
      />
      <Tag />
    </div>
  );
}
