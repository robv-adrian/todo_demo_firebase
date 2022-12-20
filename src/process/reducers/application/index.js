import { createActions, createReducer } from "reduxsauce";

import { produce, updateProps } from "../shared";

export const { Types, Creators } = createActions(
  {
    init: null,
    mounted: null,
    rehydrated: null,
    rehydratedAndMounted: null,
    updateProps: ["props"],
    setUserSession: null,
  },
  { prefix: "application/" }
);

const initialState = {
  errors: [],
  mounted: false,
  rehydrated: false,
  userSession: false,
};

export const rehydratedAndMounted = (state = initialState) =>
  produce(state, (draft) => {
    draft.rehydrated = true;
  });

export const setUserSession = (state) =>
  produce(state, (draft) => (draft.userSession = !draft.userSession));

export default createReducer(initialState, {
  [Types.REHYDRATED_AND_MOUNTED]: rehydratedAndMounted,
  [Types.SET_USER_SESSION]: setUserSession,
  [Types.UPDATE_PROPS]: updateProps,
});

export const application = (state) => state.application;
