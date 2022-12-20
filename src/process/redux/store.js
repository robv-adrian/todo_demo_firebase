import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, compose, applyMiddleware } from "redux";

import sagas from "Sagas";
import { Creators as StartupActions } from "Reducers/application";

import { storeConfig } from "./config";
import apiMiddleware from "./apiMiddleware";
import rootReducer from "./rootReducer";

let rehydrationComplete;
const middlewares = [];

const rehydrationPromise = new Promise((resolve) => {
  rehydrationComplete = resolve;
});

const rehydration = () => rehydrationPromise;

const sagaMiddleware = createSagaMiddleware();

middlewares.push(apiMiddleware);
middlewares.push(sagaMiddleware);

middlewares.push(
  createLogger({
    collapsed: true,
  })
);

const enhancer = compose(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(storeConfig, rootReducer);
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store, {}, () => {
  rehydrationComplete();
  store.dispatch(StartupActions.rehydrated());
});

sagaMiddleware.run(sagas);

export default () => ({ store, persistor, rehydration });
