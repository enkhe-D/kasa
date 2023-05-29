import "../style/style.css";
import "../style/Collapse.css"

export default function Collapse({ collTitle, collText }) {
  return (
    <div className="container-collapse">
      <div className="card-collapse">
        <h4 className="titre-collapse">
          {collTitle}{" "}
          <span>
            {" "}
            <i className="fa-solid fa-chevron-up"></i>
          </span>
          <span>
            {" "}
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </h4>
        <p className="para-collapse">{collText}</p>
      </div>
    </div>
  );
}
