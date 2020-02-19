import React, { Component } from "react";
import { Link } from "react-router-dom";

// Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

// Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import GroupIcon from "@material-ui/icons/Group";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerWidth = 240;

const styles = {
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: {
    minHeight: 60
  }
};

class Sidebar extends Component {
  render() {
    const { classes } = this.props;

    const sidebarContent = [
      {
        text: "Dashboard",
        link: "/",
        icon: <DashboardIcon />
      },
      {
        text: "Projects",
        link: "/projects",
        icon: <AssignmentIcon />
      },
      {
        text: "Users",
        link: "/users",
        icon: <GroupIcon />
      },
      {
        text: "Calendar",
        link: "/calendar",
        icon: <CalendarTodayIcon />
      },
      {
        text: "Settings",
        link: "/settings",
        icon: <SettingsIcon />
      }
    ];

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <List>
            {sidebarContent.map(item => (
              <ListItem button key={item.text} component={Link} to={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
