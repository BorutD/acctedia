import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getProjects } from "../redux/actions/dataActions";

import Project from "../components/project/Project";

class Projects extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects, loading } = this.props.data;

    let recentProjects = !loading ? (
      projects.map(project => (
        <Project key={project.projectName} project={project} />
      ))
    ) : (
      <h4>Loading...</h4>
    );

    return <div>{recentProjects}</div>;
  }
}

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getProjects })(Projects);
