import Api from "Api";
import { Types as UserTypes } from "Reducers/user";
import { Types as ApplicationTypes } from "Reducers/application";
// import NavigationService from "Navigation";
import { put } from "redux-saga/effects";

export const signUp = function* ({ email, password, userInformation }) {
  yield put({
    type: Api.API_CALL,
    actions: {
      success: { type: UserTypes.SIGN_UP_SUCCESS },
      fail: { type: UserTypes.SIGN_UP_FAIL },
    },
    promise: Api.registerUser(email, password, {
      displayName: userInformation,
    }),
  });
};

export const signUpSuccess = function* () {
  yield alert("Account created");
  yield put({
    type: ApplicationTypes.UPDATE_PROPS,
    props: { userSession: true },
  });
};

export const signUpFail = function* () {
  yield put({ type: "state/RESET" });
  yield console.log("Failed");
};

export const logout = function* () {
  yield Api.logout();
  yield put({
    type: ApplicationTypes.UPDATE_PROPS,
    props: { userSession: false },
  });
  yield put({ type: "state/RESET" });
};

export const login = function* ({ email, password }) {
  yield put({
    type: Api.API_CALL,
    actions: {
      success: { type: UserTypes.LOGIN_SUCCESS },
      fail: { type: UserTypes.LOGIN_FAIL },
    },
    promise: Api.loginUser(email, password),
  });
};

export const loginSuccess = function* () {
  yield put({
    type: ApplicationTypes.UPDATE_PROPS,
    props: { userSession: true },
  });
};
export const loginFail = function* () {
  yield put({ type: "state/RESET" });
};

export const updateUserProfile = function* ({ userInformation }) {
  console.log(userInformation);
  yield put({
    type: Api.API_CALL,
    actions: {
      success: {
        type: UserTypes.UPDATE_USER_PROFILE_SUCCESS,
        userInformation: userInformation,
      },
      fail: { type: UserTypes.UPDATE_USER_PROFILE_FAIL },
    },
    promise: Api.updateUserProfile({ displayName: userInformation }),
  });
};
export const updateUserProfileSuccess = function* ({ userInformation }) {
  yield put({ type: UserTypes.UPDATE_USER_PROPS, props: userInformation });
};
export const updateUserProfileFail = function* () {};
