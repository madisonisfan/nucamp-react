import * as ActionTypes from "./ActionTypes";

export const addComment = (campsiteId, rating, author, text) => ({
  type: ActionTypes.ADD_COMMENT,
});
