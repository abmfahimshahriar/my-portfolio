import { AppBar, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import "./Navbar.css";
import { Sidebar } from "../../components";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import logo from "../../Utilities/Images/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toogleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className="navbar-main">
          <IconButton color="inherit" onClick={toogleSidebar}>
            <MenuIcon />
          </IconButton>
          <div className="name-logo">
            <Avatar variant="square" src={logo} style={{marginRight: "16px"}}/>
            A.B.M.Fahim Shahriar
          </div>
          <div></div>
        </Toolbar>
      </AppBar>
      <Sidebar sidebarOpen={open} />
    </div>
  );
};

export default Navbar;
