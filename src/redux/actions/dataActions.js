import { SET_PROJECTS, LOADING_DATA } from "../types";
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
