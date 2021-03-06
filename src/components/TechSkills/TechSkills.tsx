import React from "react";
import { techSkillsData } from "../../data/techSkillsData";
import "./TechSkills.css";
import CodeIcon from "@material-ui/icons/Code";
import CropFreeIcon from "@material-ui/icons/CropFree";
import SettingsIcon from '@material-ui/icons/Settings';

const TechSkills = () => {
  return (
    <div className="tech-skills-wrapper">
      <h2>Technical Skills</h2>
      <div className="tech-skills-card">
        <div className="programming-languages">
          <div>
            <CodeIcon fontSize="large" />
          </div>
          <div>
            <h3>{techSkillsData[0].Name}</h3>
          </div>
          <div>
            <ul>
              {techSkillsData[0].Value.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="frameworks">
          <div>
            <CropFreeIcon fontSize="large" />
          </div>
          <div>
            <h3>{techSkillsData[1].Name}</h3>
          </div>
          <div>
            <ul>
              {techSkillsData[1].Value.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="devtools">
          <div>
            <SettingsIcon fontSize="large" />
          </div>
          <div>
            <h3>{techSkillsData[2].Name}</h3>
          </div>
          <div>
            <ul>
              {techSkillsData[2].Value.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
