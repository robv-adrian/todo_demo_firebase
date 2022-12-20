import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeConfig = {
  key: 'inbited-persist-web-1',
  storage: AsyncStorage,
  timeout: null,
  blacklist: ['transient'],
};

export default {storeConfig};
