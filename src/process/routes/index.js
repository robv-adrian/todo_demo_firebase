import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';

import Screens from 'Screens';

const screens = {
  Login: {
    screen: Screens.Public.Login,
  },
  SignUp: {
    screen: Screens.Public.SignUp,
  },
};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);
