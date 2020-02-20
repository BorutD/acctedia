import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "../../../util/theme";

// Components
import Sidebar from "../Sidebar/Sidebar";

// Redux
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/userActions";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme(themeFile);

const styles = {
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
};

// Icons => TODO!!!

class Navbar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const { authenticated, classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar className="nav-container">
            {authenticated ? (
              <Fragment>
                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>
                <Button onClick={this.handleLogout}>Logout</Button>
              </Fragment>
            ) : (
              <Fragment>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>
                <Button color="inherit" component={Link} to="signup">
                  Signup
                </Button>
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
        {authenticated ? <Sidebar /> : ""}
      </div>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapActionsToProps = {
  logoutUser
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Navbar));
