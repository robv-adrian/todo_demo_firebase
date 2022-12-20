import { createActions, createReducer } from "reduxsauce";

import { produce, updateProps } from "../shared";
import {
  signUp,
  signUpFail,
  signUpSuccess,
  logout,
  login,
  loginSuccess,
  loginFail,
  updateUserProfile,
  updateUserProfileSuccess,
  updateUserProfileFail,
} from "Sagas/user";

export const { Types, Creators } = createActions(
  {
    updateUserProps: ["props"],
    signUp: ["email", "password", "userInformation"],
    signUpFail: null,
    signUpSuccess: ["payload"],
    logout: null,
    login: ["email", "password"],
    loginSuccess: ["payload"],
    loginFail: null,
    updateUserProfile: ["userInformation"],
    updateUserProfileFail: null,
    updateUserProfileSuccess: null,
  },
  { prefix: "user/" }
);

const initialState = {
  isPremium: false,
};

export default createReducer(initialState, {
  [Types.UPDATE_USER_PROPS]: updateProps,
  [Types.SIGN_UP_FAIL]: signUpFail,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP]: signUp,
  [Types.LOGOUT]: logout,
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAIL]: loginFail,
  [Types.UPDATE_USER_PROFILE]: updateUserProfile,
  [Types.UPDATE_USER_PROFILE_SUCCESS]: updateUserProfileSuccess,
  [Types.UPDATE_USER_PROFILE_FAIL]: updateUserProfileFail,
});

export const user = (state) => state.user;
