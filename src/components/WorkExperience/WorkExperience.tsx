import React from "react";
import "./WorkExperience.css";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import PlaceIcon from "@material-ui/icons/Place";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Divider from "@material-ui/core/Divider";
import { WorkExperienceData } from "../../data/workExperienceData";

const WorkExperience = () => {
  return (
    <div className="work-experience-wrapper">
      <h2>Work Experience</h2>
      <div className="work-experience-card">
        {WorkExperienceData.map((item, idx) => (
          <div className="single-work" key={idx}>
            <div className="job-title">
              <BusinessCenterIcon />
              <div style={{ marginLeft: "8px" }}>{item.Company}</div>
            </div>
            <div className="job-role">
              <PersonPinIcon />
              <div style={{ marginLeft: "8px" }}>{item.JobRole}</div>
            </div>
            <div className="job-duration-location">
              <div style={{ display: "flex", marginRight: "64px" }}>
                <CalendarTodayIcon />
                <div style={{ marginLeft: "8px" }}>{item.Duration}</div>
              </div>
              <div style={{ display: "flex" }}>
                <PlaceIcon />
                <div style={{ marginLeft: "8px" }}>{item.Location}</div>
              </div>
            </div>

            <div className="job-description">
              <AssignmentIcon />
              <div style={{ marginLeft: "8px" }}>
                <ul style={{margin: "0"}}>
                  {item.JobDescription.map((workItem, idx) => (
                    <li key={idx}>{workItem}</li>
                  ))}
                </ul>
              </div>
            </div>
            {idx !== WorkExperienceData.length - 1 && (
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

export default WorkExperience;
