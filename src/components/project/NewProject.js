import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// Material UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

// Redux
import { connect } from "react-redux";

const styles = {
  form: {
    textAlign: "center"
  },
  image: {
    margin: "20px auto 20px auto"
  },
  pageTitle: {
    margin: "10px auto 10px auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10
  },
  progress: {
    position: "absolute"
  },
  submitButton: {
    position: "relative",
    marginTop: 20
  }
};

class NewProject extends Component {
  constructor() {
    super();
    this.state = {
      projectTitle: "",
      errors: {}
    };
  }
  render() {
    const {
      classes,
      UI: { loading }
    } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <Grid container className={classes.form}>
          <Grid item sm />
          <Grid item sm>
            <Typography variant="h4" className={classes.pageTitle}>
              Create a new project
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id="projectTitle"
                name="projectTitle"
                type="projectTitle"
                label="Project title"
                className={classes.textField}
                helperText={errors.projectTitle}
                error={errors.projectTitle ? true : false}
                value={this.state.projectTitle}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="projectDescription"
                name="projectDescription"
                type="projectDescription"
                label="Project description"
                multiline
                rows="5"
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
                disabled={loading}
              >
                Submit
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </Button>
            </form>
          </Grid>
          <Grid item sm />
        </Grid>
      </div>
    );
  }
}

NewProject.propTypes = {
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  UI: state.UI
});

export default connect(mapStateToProps)(withStyles(styles)(NewProject));
