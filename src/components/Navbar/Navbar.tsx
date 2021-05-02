import { AppBar, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";
import { Sidebar } from "../../components";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toogleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navbar-main">
          <IconButton color="inherit" onClick={toogleSidebar}>
            <MenuIcon />
          </IconButton>
          <div>A.B.M.Fahim Shahriar</div>
          <Link to="workExperience" spy={true} smooth={true} duration={500}>
            <Button variant="contained" color="primary">
              Work experience
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Sidebar sidebarOpen={open} />
    </div>
  );
};

export default Navbar;
