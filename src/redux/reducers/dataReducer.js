import { SET_PROJECTS, LOADING_DATA } from "../types";

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
    default:
      return state;
  }
}
