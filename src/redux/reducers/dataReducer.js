import { SET_PROJECTS, LOADING_DATA, POST_PROJECT } from "../types";

const initialState = {
  projects: [],
  project: {},
  loading: false
};

export default function(state = initialState, action) {
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
    default:
      return state;
  }
}
