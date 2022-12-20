import Login from "./public/Login";
import SignUp from "./public/SignUp";
import Todos from "./private/Todos";
import SetProfile from "./private/SetProfile";

const Screens = {
  Public: {
    Login,
    SignUp,
  },
  Private: {
    Todos,
    SetProfile,
  },
};

export default Screens;
