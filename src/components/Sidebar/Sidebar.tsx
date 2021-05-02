import React from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import clsx from "clsx";
import { Link } from "react-scroll";

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
            to="workExperience"
            spy={true}
            smooth={true}
            duration={500}
            className="link-item"
          >
            <ListItem button key="work experience">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="work experience" />
            </ListItem>
          </Link>

          
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default Sidebar;
