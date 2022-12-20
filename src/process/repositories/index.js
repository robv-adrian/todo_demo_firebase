import Api from "Api";

const addTodo = (data) => {
  return Api.addData("todos", { todo: data });
};

const deleteTodo = (docId) => {
  return Api.deleteData("todos", docId);
};

const updateTodo = (docId, data) => {
  return Api.updateData(docId, "todos", { todo: data });
};

export default { addTodo, deleteTodo, updateTodo };
