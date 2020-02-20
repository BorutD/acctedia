import React, { Component } from "react";

import PropTypes from "prop-types";

class Project extends Component {
  render() {
    const {
      project: { projectName, adminHandle }
    } = this.props;

    return (
      <div>
        <h2>Project -> {projectName}</h2>
        <h4>{adminHandle}</h4>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;

/*
You need a table:
Project   Category  Tasks   Actions   Status
*/
