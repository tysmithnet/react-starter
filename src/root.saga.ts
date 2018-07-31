import { all } from "redux-saga/effects";
import { rootSaga as loginSaga } from "./auth/auth.saga";

export default function* rootSaga() {
  yield all([loginSaga()]);
}
