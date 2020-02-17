import React, { Component } from "react";
import { Link } from "react-router-dom";

// Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import HomeIcon from "@material-ui/icons/Home";

const drawerWidth = 240;

const styles = {
  root: {
    display: "flex",
    zIndex: 0
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: {
    minHeight: 56
  }
};

class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    const sidebarContent = [
      "Dashboard",
      "Projects",
      "Users",
      "Calendar"
      // "Board",
      // "Settings"
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
            {/* {sidebarContent.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
            <ListItem>
              <Button color="inherit" component={Link} to="/">
                Dashboard
              </Button>
            </ListItem>
            <ListItem>
              <Button color="inherit" component={Link} to="/projects">
                Projects
              </Button>
            </ListItem>
            <ListItem>
              <Button color="inherit" component={Link} to="/users">
                Users
              </Button>
            </ListItem>
            <ListItem>
              <Button color="inherit" component={Link} to="/calendar">
                Calendar
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
