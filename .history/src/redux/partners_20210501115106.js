import { PARTNERS } from "../shared/partners";

export const Partners = (state = PARTNERS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PARTNERS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };

    case ActionTypes.PROMOTIONS_LOADING:
      return { ...state, isLoading: true, errMess: null, promotions: [] };

    case ActionTypes.PROMOTIONS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
