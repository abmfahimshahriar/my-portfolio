import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import { Link } from "react-scroll";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CodeIcon from "@material-ui/icons/Code";
import WorkIcon from "@material-ui/icons/Work";
import WebIcon from "@material-ui/icons/Web";
import SchoolIcon from "@material-ui/icons/School";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import ScoreIcon from "@material-ui/icons/Score";
import ContactsIcon from '@material-ui/icons/Contacts';

const drawerWidth = 240;
const { innerWidth: width } = window;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    customSidebar: {
      top: width > 600 ? 64 : 56,
    },
  })
);

type Props = {
  sidebarOpen: boolean;
};
const Sidebar: React.FC<Props> = ({ sidebarOpen }) => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={sidebarOpen}
        classes={{
          paper: clsx(classes.drawerPaper, classes.customSidebar),
        }}
      >
        <Divider />
        <List>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="link-item"
          >
            <ListItem button key="About">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </Link>

          <Link
            to="techSkills"
            spy={true}
            smooth={true}
            duration={500}
            className="link-item"
          >
            <ListItem button key="Technical Skills">
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="Technical Skills" />
            </ListItem>
          </Link>

          <Link
            to="workExperience"
            spy={true}
            smooth={true}
            duration={500}
            className="link-item"
          >
            <ListItem button key="work experience">
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="work experience" />
            </ListItem>
          </Link>

          <Link
            to="personalProjects"
            spy={true}
            smooth={true}
            duration={500}
            className="link-item"
          >
            <ListItem button key="Personal Projects">
              <ListItemIcon>
                <WebIcon />
              </ListItemIcon>
              <ListItemText primary="Personal Projects" />
            </ListItem>
          </Link>

          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className="link-item"
          >
            <ListItem button key="Education">
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItem>
          </Link>

          <Link
            to="certificaiton"
            spy={true}
            smooth={true}
            duration={500}
            className="link-item"
          >
            <ListItem button key="Certification">
              <ListItemIcon>
                <CardMembershipIcon />
              </ListItemIcon>
              <ListItemText primary="Certification" />
            </ListItem>
          </Link>

          <Link
            to="extraCurricular"
            spy={true}
            smooth={true}
            duration={500}
            className="link-item"
          >
            <ListItem button key="Extra Curricular Activities">
              <ListItemIcon>
                <LocalActivityIcon />
              </ListItemIcon>
              <ListItemText primary="Extra Curricular Activities" />
            </ListItem>
          </Link>

          <Link
            to="testScores"
            spy={true}
            smooth={true}
            duration={500}
            className="link-item"
          >
            <ListItem button key="Test Scores">
              <ListItemIcon>
                <ScoreIcon />
              </ListItemIcon>
              <ListItemText primary="Test Scores" />
            </ListItem>
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="link-item"
          >
            <ListItem button key="Contact">
              <ListItemIcon>
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
