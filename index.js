import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Application from './src/show/Application';

AppRegistry.registerComponent(appName, () => Application);
