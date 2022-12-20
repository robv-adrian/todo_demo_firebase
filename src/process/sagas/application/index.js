import {delay} from 'redux-saga/effects';

export const init = function* () {
  yield delay(300);
};
