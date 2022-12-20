import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import createStore from 'Redux/store';
import {Creators as applicationCreators} from 'Reducers/application';

import ApplicationRoot from './ApplicationRoot';

global.XMLHttpRequest = global.originalXMLHttpRequest
  ? global.originalXMLHttpRequest
  : global.XMLHttpRequest;
global.FormData = global.originalFormData
  ? global.originalFormData
  : global.FormData;

fetch; // Ensure to get the lazy property

if (window.__FETCH_SUPPORT__) {
  // it's RNDebugger only to have
  window.__FETCH_SUPPORT__.blob = false;
} else {
  /*
   * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
   * If you're using another way you can just use the native Blob and remove the `else` statement
   */
  global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
  global.FileReader = global.originalFileReader
    ? global.originalFileReader
    : global.FileReader;
}

const {store, persistor} = createStore();

const initApp = () => {
  store.dispatch(applicationCreators.init());
};

const Application = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} onBeforeLift={initApp()}>
      <ApplicationRoot />
    </PersistGate>
  </Provider>
);

export default Application;
