import { connect } from "react-redux";

import { Creators as UserCreators } from "Reducers/user";
import { Creators as TransientCreators } from "Reducers/transient";

import SetProfile from "./view";

export default connect(
  (state) => ({
    fullName: state.transient.fullName,
  }),
  {
    updateTransientProps: TransientCreators.updateTransientProps,
    updateUserProfile: UserCreators.updateUserProfile,
  }
)(SetProfile);
