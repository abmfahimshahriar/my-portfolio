import React from "react";
import { broadDescriptionData } from "../../data/broadDescriptionData";
import "./BroadDescription.css";
const BroadDescription = () => {
  return (
    <div className="broad-desc-wrapper">
      <div className="broad-desc">
        <h1>{broadDescriptionData.Title}</h1>
        <h2 className="desc-paragraph">{broadDescriptionData.Description}</h2>
      </div>
    </div>
  );
};

export default BroadDescription;
