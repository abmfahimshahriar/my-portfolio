import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import "./Navbar.css";
import {
  Link,
} from "react-scroll";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navbar-main">
          <div>A.B.M.Fahim Shahriar</div>
          <Link to="workExperience" spy={true} smooth={true} duration={500}>
            <Button variant="contained" color="primary">
              Work experience
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
