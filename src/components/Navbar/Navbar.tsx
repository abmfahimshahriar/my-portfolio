import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navbar-main">
          <div>A.B.M.Fahim Shahriar</div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
