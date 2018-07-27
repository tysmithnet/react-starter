import { delay } from "redux-saga";
import { all, put } from "redux-saga/effects";
import {changeUser, IUser} from "./app/App";

export function* helloSaga() {
  yield delay(1000);
  yield put(changeUser({
    id: "a",
    name: "ty",
    permissions: [],
  }));
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga()]);
}
