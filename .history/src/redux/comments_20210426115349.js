import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      const commet = action.payload;
      Comment.id = state.length;
      Comment.date = new Date().toISOString();
    default:
      return state;
  }
};
