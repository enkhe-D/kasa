import img404 from "../assets/images/404.png";
import "../styles/style.css";

export default function Error() {
  return (
    <main>
      <p className="img-error">
        <img src={img404} alt="erreur 404" />
      </p>
      <p className="paragraphe-error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <button className="btn-error">Retourner sur la page d'accueil</button>
    </main>
  );
}
