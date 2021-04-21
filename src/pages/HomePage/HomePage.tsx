import React from "react";
import "./HomePage.css";
import {
  Navbar,
  ShortDescription,
  BroadDescription,
  TechSkills,
  WorkExperience,
  PersonalProjectInfo,
  ProjectList,
} from "../../components";

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <Navbar />
      <ShortDescription />
      <BroadDescription />
      <div className="center-items">
        <TechSkills />
        <WorkExperience />
      </div>
      <PersonalProjectInfo />
      <div className="center-items">
        <ProjectList />
      </div>
    </div>
  );
};

export default HomePage;
