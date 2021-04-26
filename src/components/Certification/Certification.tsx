import React from "react";
import "./Certification.css";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import { certificationData } from "../../data/certificationData";

const Certification = () => {
  return (
    <div className="certification-wrapper">
      <h2>Certification</h2>
      <div className="certification-card">
        {certificationData.map((item, idx) => (
          <div className="single-certification" key={idx}>
              <CardMembershipIcon />
              {/* <div style={{ marginLeft: "8px" }}>{item.Title}</div> */}
              <a href={item.Link} target="_blank" style={{ marginLeft: "8px" }}>{item.Title}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
