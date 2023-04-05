import "../style/style.css";

export default function Collapse({ sousTitre, paraCollapse }) {
  return (
    <div className="container-collapse">
      <div className="card-collapse">
        <h4 className="titre-collapse">
          {sousTitre}{" "}
          <span>
            {" "}
            <i class="fa-solid fa-chevron-up"></i>
          </span>
          <span>
            {" "}
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </h4>
        <p className="para-collapse">{paraCollapse}</p>
      </div>
    </div>
  );
}
