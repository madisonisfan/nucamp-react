import * as ActionTypes from "./ActionTypes";

export const Campsites = (
  state = { isLoading: true, errMess: null, campsites: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_CAMPSITES:
      return { ...state, isLoading: false, errMess };
    default:
      return state;
  }
};
