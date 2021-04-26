import { createStore, combineReducer } from "redux";

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);

  return store;
};
