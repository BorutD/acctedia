import {
  SET_PROJECTS,
  LOADING_DATA,
  LOADING_UI,
  POST_PROJECT,
  CLEAR_ERRORS,
  SET_ERRORS
} from "../types";
import axios from "axios";

export const getProjects = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/projects")
    .then(res => {
      dispatch({
        type: SET_PROJECTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_PROJECTS,
        payload: []
      });
    });
};

export const postProject = newProject => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/project", newProject)
    .then(res => {
      dispatch({
        type: POST_PROJECT,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
