import { createActions, createReducer } from "reduxsauce";

import { produce, updateProps } from "../shared";
import {
  addTodo,
  addTodoSuccess,
  addTodoFail,
  deleteTodo,
  deleteTodoFail,
  deleteTodoSuccess,
  updateTodo,
  updateTodoFail,
  updateTodoSuccess,
} from "Sagas/data";

export const { Types, Creators } = createActions(
  {
    updateDataProps: ["props"],
    addTodo: ["data"],
    addTodoSuccess: null,
    addTodoFail: null,
    deleteTodo: ["docId"],
    deleteTodoFail: null,
    deleteTodoSuccess: null,
    updateTodo: ["docId", "data"],
    updateTodoFail: null,
    updateTodoSuccess: null,
  },
  { prefix: "data/" }
);

const initialState = {};

export default createReducer(initialState, {
  [Types.UPDATE_DATA_PROPS]: updateProps,
  [Types.ADD_TODO]: addTodo,
  [Types.ADD_TODO_SUCCESS]: addTodoSuccess,
  [Types.ADD_TODO_FAIL]: addTodoFail,
  [Types.DELETE_TODO]: deleteTodo,
  [Types.DELETE_TODO_FAIL]: deleteTodoFail,
  [Types.DELETE_TODO_SUCCESS]: deleteTodoSuccess,
  [Types.UPDATE_TODO]: updateTodo,
  [Types.UPDATE_TODO_FAIL]: updateTodoFail,
  [Types.UPDATE_TODO_SUCCESS]: updateTodoSuccess,
});

export const data = (state) => state.data;
