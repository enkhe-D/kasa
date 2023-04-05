import img404 from "../assets/images/404.png";
import "../style/style.css";

export default function Error() {
  return (
    <div className="container-erreur">
      <p className="img-404">
        <img src={img404} alt="erreur 404" />
      </p>
      <p className="para-erreur">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <button className="btn-erreur">Retrouner sur la page d'accueil</button>
    </div>
  );
}
