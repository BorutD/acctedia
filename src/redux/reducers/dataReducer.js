import {
  SET_PROJECTS,
  LOADING_DATA,
  POST_PROJECT,
  DELETE_PROJECT
} from "../types";

const initialState = {
  projects: [],
  project: {},
  loading: false
};

export default function(state = initialState, action) {
  var index;
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case POST_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects]
      };
    case DELETE_PROJECT:
      index = state.projects.findIndex(
        project => project.projectId === action.payload
      );
      state.projects.splice(index, 1);
      return {
        ...state
      };
    default:
      return state;
  }
}
