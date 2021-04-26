import { createStore, combineReducer } from "redux";
import { Campsites } from "./campsites";
import { Partners } from "./partners";
import { Promotions } from "./promotions";
import { Comments } from "./comments";

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);

  return store;
};
