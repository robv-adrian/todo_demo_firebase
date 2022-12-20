import Todos from "./view";
import { connect } from "react-redux";
import { Creators as UserCreators } from "Reducers/user";
import { Creators as TransientCreators } from "Reducers/transient";
import { Creators as DataCreators } from "Reducers/data";

export default connect(
  (state) => ({
    todo: state.transient.todo,
    todos: state.user.todos,
    todoUpdated: state.transient.todoUpdated,
  }),
  {
    addTodo: DataCreators.addTodo,
    updateTodo: DataCreators.updateTodo,
    deleteTodo: DataCreators.deleteTodo,
    logout: UserCreators.logout,
    updateTransientProps: TransientCreators.updateTransientProps,
  }
)(Todos);
