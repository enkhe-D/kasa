import React, { useState } from "react";
import "../styles/style.css";
import "../styles/Collapse.css";

export default function Collapse({ dropDown, collapseContent }) {
  const [visible, setVisible] = useState(false);

  const toggleCollapse = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="item-collapse">
        <p className="collapse-content1" onClick={toggleCollapse}>
          {dropDown}
          <i className={`fa-solid fa-chevron-${visible ? "up" : "down"}`}></i>
        </p>
        {visible && (
          <div className="collapse-content2">
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
