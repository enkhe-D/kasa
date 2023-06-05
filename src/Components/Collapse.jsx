import "../style/style.css";
import "../style/Collapse.css"
import { useState } from "react";

export default function Collapse({ collTitle, collText, CollLocation, collEquipement }) {
  const [Visible, setVisible] = useState(false)

  const toggleCollapse = () =>{
    setVisible(!Visible)
  }

  return (
    <>
    <h2>{collTitle}</h2>
    <p>{CollLocation}</p>
    
    <div className="container-collapse">
        <p className="titre-collapse" onClick={toggleCollapse}>Description
        {Visible ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}
        </p>
      {Visible && (
        <p className="text-Collapse">{collText}</p>
      )}
    </div>
    </>
  );
}
