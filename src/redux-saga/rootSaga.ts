import { all, fork } from "redux-saga/effects";

import todoSaga from "./todo/sagas";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}