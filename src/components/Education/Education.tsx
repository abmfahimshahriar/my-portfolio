import React from "react";
import "./Education.css";
import BusinessIcon from "@material-ui/icons/Business";
import SchoolIcon from "@material-ui/icons/School";
import PlaceIcon from "@material-ui/icons/Place";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Divider from "@material-ui/core/Divider";
import { educationData } from "../../data/educationData";

const Education = () => {
  return (
    <div className="education-wrapper">
      <h2>Education</h2>
      <div className="education-card">
        {educationData.map((item, idx) => (
          <div className="single-education" key={idx}>
            <div className="degree-title">
              <SchoolIcon />
              <div style={{ marginLeft: "8px" }}>{item.DegreeName}</div>
            </div>
            <div className="institute-name">
              <BusinessIcon />
              <div style={{ marginLeft: "8px" }}>{item.InstituteName}</div>
            </div>
            <div className="degree-duration-location">
              <div style={{ display: "flex", marginRight: "64px" }}>
                <CalendarTodayIcon />
                <div style={{ marginLeft: "8px" }}>{item.DegreeDuration}</div>
              </div>
              <div style={{ display: "flex" }}>
                <PlaceIcon />
                <div style={{ marginLeft: "8px" }}>{item.DegreeLocation}</div>
              </div>
            </div>
            {idx !== educationData.length - 1 && (
              <div className="custom-divider">
                <Divider />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
