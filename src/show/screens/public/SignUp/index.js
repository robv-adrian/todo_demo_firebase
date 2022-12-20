import { connect } from "react-redux";

import { Creators as UserCreators } from "Reducers/user";
import { Creators as TransientCreators } from "Reducers/transient";

import SignUp from "./view";

export default connect(
  (state) => ({
    email: state.transient.email,
    password: state.transient.password,
    fullName: state.transient.fullName,
    isPremium: state.user.isPremium,
  }),
  {
    updateTransientProps: TransientCreators.updateTransientProps,
    signUp: UserCreators.signUp,
    updateUserProps: UserCreators.updateUserProps,
  }
)(SignUp);
