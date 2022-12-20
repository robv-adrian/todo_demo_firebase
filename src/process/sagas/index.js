import { all, takeLatest } from "redux-saga/effects";

// TYPES
import { Types as ApplicationTypes } from "Reducers/application";
import { Types as UserTypes } from "Reducers/user";
import { Types as DataTypes } from "Reducers/data";

// SAGAS
import {
  signUp,
  signUpSuccess,
  signUpFail,
  logout,
  login,
  loginFail,
  loginSuccess,
  updateUserProfile,
  updateUserProfileSuccess,
  updateUserProfileFail,
} from "./user";

import {
  addTodo,
  addTodoFail,
  addTodoSuccess,
  deleteTodo,
  deleteTodoFail,
  deleteTodoSuccess,
  updateTodo,
  updateTodoFail,
  updateTodoSuccess,
} from "./data";

import { init } from "./application";

export default function* root() {
  yield all([
    takeLatest(ApplicationTypes.INIT, init),
    takeLatest(UserTypes.SIGN_UP, signUp),
    takeLatest(UserTypes.SIGN_UP_FAIL, signUpFail),
    takeLatest(UserTypes.SIGN_UP_SUCCESS, signUpSuccess),
    takeLatest(UserTypes.LOGOUT, logout),
    takeLatest(UserTypes.LOGIN, login),
    takeLatest(UserTypes.LOGIN_SUCCESS, loginSuccess),
    takeLatest(UserTypes.LOGIN_FAIL, loginFail),
    takeLatest(UserTypes.UPDATE_USER_PROFILE, updateUserProfile),
    takeLatest(UserTypes.UPDATE_USER_PROFILE_SUCCESS, updateUserProfileSuccess),
    takeLatest(UserTypes.UPDATE_USER_PROFILE_FAIL, updateUserProfileFail),
    takeLatest(DataTypes.ADD_TODO, addTodo),
    takeLatest(DataTypes.ADD_TODO_SUCCESS, addTodoSuccess),
    takeLatest(DataTypes.ADD_TODO_FAIL, addTodoFail),
    takeLatest(DataTypes.DELETE_TODO, deleteTodo),
    takeLatest(DataTypes.DELETE_TODO_SUCCESS, deleteTodoSuccess),
    takeLatest(DataTypes.DELETE_TODO_FAIL, deleteTodoFail),
    takeLatest(DataTypes.UPDATE_TODO, updateTodo),
    takeLatest(DataTypes.UPDATE_TODO_SUCCESS, updateTodoSuccess),
    takeLatest(DataTypes.UPDATE_TODO_FAIL, updateTodoFail),
  ]);
}
