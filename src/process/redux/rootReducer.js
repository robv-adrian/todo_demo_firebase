import { createActions } from "reduxsauce";
import { persistCombineReducers } from "redux-persist";

import { application, transient, user, data } from "Reducers";

import { storeConfig } from "./config";

export const { Types } = createActions(
  {
    reset: null,
  },
  { prefix: "state/" }
);

const appReducers = persistCombineReducers(storeConfig, {
  application,
  transient,
  user,
  data,
});

const rootReducer = (state, action) => {
  if (action.type === "state/RESET") {
    state = {
      ...state,
      application: undefined,
      transient: undefined,
      user: undefined,
      data: undefined,
    };
  }
  return appReducers(state, action);
};

export default rootReducer;
