import React, { useEffect } from "react";
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
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Button from "@material-ui/core/Button";

const HomePage = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollTo = () => {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToWithContainer = () => {
    let goToContainer = new Promise<void>((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", () => {});

    // returned function will be called on component unmount
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div className="home-page-wrapper">
      <Navbar />

      <ShortDescription />
      <BroadDescription />
      <div className="center-items">
        <TechSkills />
        <Element name="workExperience" style={{ width: "100%" }}>
          <WorkExperience />
        </Element>
      </div>
      <PersonalProjectInfo />
      <div className="center-items">
        <ProjectList />
      </div>
    </div>
  );
};

export default HomePage;
