import React from "react";
import "./HomePage.css";
import {
  Navbar,
  ShortDescription,
  BroadDescription,
  TechSkills,
} from "../../components";

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <Navbar />
      <ShortDescription />
      <BroadDescription />
      <div className="center-items">
        <TechSkills />
      </div>
    </div>
  );
};

export default HomePage;
