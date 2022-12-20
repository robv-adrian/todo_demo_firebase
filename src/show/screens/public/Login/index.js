import { connect } from "react-redux";

import { Creators as TransientCreators } from "Reducers/transient";
import { Creators as UserCreators } from "Reducers/user";

import Login from "./view";

export default connect(
  (state) => ({
    email: state.transient.email,
    password: state.transient.password,
  }),
  {
    updateTransientProps: TransientCreators.updateTransientProps,
    login: UserCreators.login,
  }
)(Login);
