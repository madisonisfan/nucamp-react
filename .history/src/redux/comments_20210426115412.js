import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      const commet = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      comment.state.concat(comment);
    default:
      return state;
  }
};
