import { delay } from "redux-saga";
import { all, put } from "redux-saga/effects";
import {rootSaga as loginSaga} from "./auth/domain";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([loginSaga()]);
}
