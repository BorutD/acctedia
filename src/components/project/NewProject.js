import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// Material UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

// Redux
import { connect } from "react-redux";
import { postProject, clearErrors } from "../../redux/actions/dataActions";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
    margin: "15px auto 15px auto"
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
    marginLeft: 15,
    marginRight: 15
  },
  btnGroup: {
    marginTop: 40,
    float: "right"
  }
};

class NewProject extends Component {
  constructor() {
    super();
    this.state = {
      projectTitle: "",
      projectDescription: "",
      assignedUsers: [],
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }
  receivedUsers = [
    {
      email: "user1@mail.com",
      handle: "User1"
    },
    {
      email: "user2@mail.com",
      handle: "User2"
    },
    {
      email: "user3@mail.com",
      handle: "User3"
    },
    {
      email: "user4@mail.com",
      handle: "User4"
    }
  ];
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.postProject({
      title: this.state.projectTitle,
      description: this.state.projectDescription,
      assignedUsers: this.state.assignedUsers
    });
  };
  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading }
    } = this.props;
    return (
      <div>
        <Grid container className={classes.form}>
          <Grid item sm />
          <Grid>
            <Typography variant="h4" className={classes.pageTitle}>
              Create a new project
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id="projectTitle"
                name="projectTitle"
                type="text"
                label="Project title"
                error={errors.projectTitle ? true : false}
                helperText={errors.projectTitle}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="projectDescription"
                name="projectDescription"
                type="text"
                label="Description"
                multiline
                rows="5"
                onChange={this.handleChange}
                fullWidth
              />
              <Autocomplete
                multiple
                id="assignedUsers"
                name="assignedUsers"
                onChange={(event, value) =>
                  this.setState({ assignedUsers: value })
                }
                options={this.receivedUsers}
                className={classes.textField}
                disableCloseOnSelect
                getOptionLabel={user => user.handle}
                renderOption={(user, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      checked={selected}
                    />
                    {user.handle}
                  </React.Fragment>
                )}
                style={{ width: 800 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Assigned users"
                    fullWidth
                  />
                )}
              />
              <div className={classes.btnGroup}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                  disabled={loading}
                  disableRipple={true}
                >
                  Create project
                  {loading && (
                    <CircularProgress
                      size={30}
                      className={classes.progressSpinner}
                    />
                  )}
                </Button>
                <Button
                  color="primary"
                  className={classes.submitButton}
                  disableRipple={true}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Grid>
          <Grid item sm />
        </Grid>
      </div>
    );
  }
}

NewProject.propTypes = {
  postProject: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  UI: state.UI
});

export default connect(mapStateToProps, { postProject, clearErrors })(
  withStyles(styles)(NewProject)
);
