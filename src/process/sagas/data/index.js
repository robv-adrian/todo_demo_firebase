import { put } from "redux-saga/effects";

import Api from "Api";
import { Types as DataTypes } from "Reducers/data";
import { Types as TransientTypes } from "Reducers/transient";

export const addTodo = function* ({ data }) {
  yield put({
    type: Api.API_CALL,
    actions: {
      success: { type: DataTypes.ADD_TODO_SUCCESS },
      fail: { type: DataTypes.ADD_TODO_FAIL },
    },
    promise: Api.repositories.addTodo(data),
  });
};

export const addTodoSuccess = function* () {
  yield alert("Todo Added");
  yield put({ type: TransientTypes.RESET_TRANSIENT });
};

export const addTodoFail = function* () {
  yield alert("There was an error");
};

export const updateTodo = function* ({ docId, data }) {
  yield put({
    type: Api.API_CALL,
    actions: {
      success: { type: DataTypes.UPDATE_TODO_SUCCESS },
      fail: { type: DataTypes.UPDATE_TODO_FAIL },
    },
    promise: Api.repositories.updateTodo(docId, data),
  });
};

export const updateTodoFail = function* () {
  yield alert("Failed to update document");
};

export const updateTodoSuccess = function* () {
  yield put({ type: TransientTypes.RESET_TRANSIENT });
  yield alert("Document updated Successfully");
};

export const deleteTodo = function* ({ docId }) {
  yield put({
    type: Api.API_CALL,
    actions: {
      success: { type: DataTypes.DELETE_TODO_SUCCESS },
      fail: { type: DataTypes.DELETE_TODO_FAIL },
    },
    promise: Api.repositories.deleteTodo(docId),
  });
};

export const deleteTodoFail = function* () {
  yield alert("Failed to delete document");
};

export const deleteTodoSuccess = function* () {
  yield alert("Document deleted Successfully");
};
