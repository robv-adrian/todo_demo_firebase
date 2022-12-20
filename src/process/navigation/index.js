import {Keyboard} from 'react-native';
import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

import {randomKey} from 'Helpers';

export const navigationRef = createNavigationContainerRef();

const config = {
  goBackDisabled: false,
};

const NavigationService = {
  goBack: twice => {
    Keyboard.dismiss();
    if (navigationRef.isReady()) {
      const navigateAction = CommonActions.goBack();
      navigationRef.dispatch(navigateAction);
      if (twice) navigationRef.dispatch(navigateAction);
    }
  },
  setNavigator: storeDispatcher => {
    if (storeDispatcher) {
      config.storeDispatcher = storeDispatcher;
    }
  },
  navigate: navigationParams => {
    Keyboard.dismiss();
    const {routeName: name, params} = navigationParams;

    if (navigationRef.isReady() && name) {
      const navigateAction = CommonActions.navigate({
        name,
        key: name + '-' + randomKey(),
        params,
      });

      navigationRef.dispatch(navigateAction);
    }
  },
};

export default NavigationService;
