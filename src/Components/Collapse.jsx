import React, { useState } from "react";
import "../style/style.css";
import "../style/Collapse.css";

export default function Collapse({ dropDown, collapseContent }) {
  const [visible, setVisible] = useState(false);

  const toggleCollapse = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="items-collapse">
        <p className="item titre-collapse" onClick={toggleCollapse}>
          {dropDown}
          <i className={`fa-solid fa-chevron-${visible ? "up" : "down"}`}></i>
        </p>
        {visible && (
          <div className="item text-collapse">
            {Array.isArray(collapseContent) ? (
              <ul>
                {collapseContent.map((item, indexCollapse) => (
                  <li key={indexCollapse}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{collapseContent}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
