import React from 'react';
import { personalProjectInfoData } from '../../data/personalProjectInfo';
import "./PersonalProjectInfo.css";

const PersonalProjectInfo = () => {
    return (
        <div className="personal-project-info-wrapper">
            <h2>{personalProjectInfoData.Title}</h2>
            <h3 className="project-info-subtitle">{personalProjectInfoData.Subtitle}</h3>
        </div>
    )
}

export default PersonalProjectInfo;