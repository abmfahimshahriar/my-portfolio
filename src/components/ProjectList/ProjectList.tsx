import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import "./ProjectList.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import Tooltip from "@material-ui/core/Tooltip";
import { projectData } from "../../data/projectData";

const ProjectList = () => {
  return (
    <div className="project-list-wrapper">
      {projectData.map((item, itemId) => (
        <div className="project-card" key={itemId}>
          <div className="project-name">{item.Title}</div>
          <div className="project-url">
            <a href={item.Website}>{item.Website}</a>
          </div>
          <div className="tech-stack">
            {item.TechStack.map((tech, techId) => (
              <Chip
              style={{marginRight: "4px", marginBottom: "4px"}}
                label={tech}
                color="primary"
                variant="outlined"
                key={techId}
              />
            ))}
          </div>
          <div className="project-description">
            <ul>
              {item.Description.map((desc, descId) => (
                <li key={descId}>{desc}</li>
              ))}
            </ul>
          </div>
          <div className="git-links">
            <Tooltip title="Front-end">
              <IconButton>
                <a
                  href={item.FrontEnd}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip title="Back-end">
              <IconButton>
              <a
                  href={item.BackEnd}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              </IconButton>
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
