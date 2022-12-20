import { createActions, createReducer } from "reduxsauce";

import { produce, updateProps } from "../shared";

export const { Types, Creators } = createActions(
  {
    resetTransient: null,
    updateTransientProps: ["props"],
  },
  { prefix: "transient/" }
);

const initialState = {};

export const resetTransient = (state) =>
  produce(state, () => {
    return initialState;
  });

export default createReducer(initialState, {
  [Types.UPDATE_TRANSIENT_PROPS]: updateProps,
  [Types.RESET_TRANSIENT]: resetTransient,
});

export const transient = (state) => state.transient;
