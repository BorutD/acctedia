import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// Material UI
import Button from "@material-ui/core/Button";

// Redux
import { connect } from "react-redux";

const styles = {
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 4vmin)"
  }
};

class home extends Component {
  render() {
    const {
      classes,
      user: { loading, authenticated }
    } = this.props;

    let homePage = !loading ? (
      authenticated ? (
        <div className={classes.header}>
          <h1>Dashboard</h1>
        </div>
      ) : (
        <div className={classes.header}>
          <h1>Acctedia</h1>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href="/signup"
          >
            Get Started
          </Button>
        </div>
      )
    ) : (
      <div>
        <h5>Loading...</h5>
      </div>
    );

    return homePage;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

home.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(home));
