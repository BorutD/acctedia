import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/userActions";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// Icons => TODO!!!

class Navbar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
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

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
