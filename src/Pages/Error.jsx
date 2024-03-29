import LinkError from "../Components/LinkError";
import img404 from "../assets/images/404.png";
import "../styles/style.css";
import "../styles/Error.css";
import "../styles/LinkError.css";

export default function Error() {
  return (
    <main className="error">
      <p>
        <img src={img404} alt="erreur 404" />
      </p>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <LinkError />
    </main>
  );
}
