import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getProjects } from "../redux/actions/dataActions";

// import Project from "../components/project/Project";

// Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// Icons
import MoreVert from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
  button: {
    right: 0
  }
};

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null
    };
  }
  receivedProjects = [
    {
      projectName: "Project 1",
      createdAt: "2020-02-08T14:09:55.766Z",
      adminHandle: "johndoe"
    },
    {
      projectName: "Project 2",
      createdAt: "2020-03-08T14:09:55.766Z",
      adminHandle: "johndoe"
    },
    {
      projectName: "Project 3",
      createdAt: "2020-04-08T14:09:55.766Z",
      adminHandle: "johndoe"
    },
    {
      projectName: "Project 4",
      createdAt: "2020-05-08T14:09:55.766Z",
      adminHandle: "johndoe"
    }
  ];
  componentDidMount() {
    // this.props.getProjects();
  }

  render() {
    // const { projects, loading } = this.props.data;
    const { classes } = this.props;

    const handleClick = event => {
      this.setState({
        anchorEl: event.currentTarget
      });
    };

    const handleClose = () => {
      this.setState({
        anchorEl: null
      });
    };

    return (
      <div>
        <div>
          <h2>Projects</h2>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={Link}
            to={"/newProject"}
          >
            New Project
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple-table">
            <TableHead>
              <TableRow>
                <TableCell>Project name</TableCell>
                <TableCell align="center">Created at</TableCell>
                <TableCell align="center">Admin</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {!loading ? (
              projects.map(project => (
                <TableRow key={project.projectName}>
                  <TableCell component="th" scope="row">
                    {project.projectName}
                  </TableCell>
                  <TableCell align="right">{project.createdAt}</TableCell>
                  <TableCell align="right">{project.adminHandle}</TableCell>
                  <TableCell align="right">
                    <MoreVert />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center">Loading...</TableCell>
              </TableRow>
            )} */}
              {this.receivedProjects.map(project => (
                <TableRow key={project.projectName}>
                  <TableCell component="th" scope="row">
                    {project.projectName}
                  </TableCell>
                  <TableCell align="center">{project.createdAt}</TableCell>
                  <TableCell align="center">{project.adminHandle}</TableCell>
                  <TableCell align="right">
                    <Button
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVert />
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={this.state.anchorEl}
                      keepMounted
                      open={Boolean(this.state.anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Edit</MenuItem>
                      <MenuItem onClick={handleClose}>Archive</MenuItem>
                      <MenuItem onClick={handleClose}>Delete</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getProjects })(
  withStyles(styles)(Projects)
);
