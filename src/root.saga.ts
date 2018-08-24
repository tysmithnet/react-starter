import { all } from "redux-saga/effects";
import { rootSaga as loginSaga } from "./auth/auth.saga";

/**
 * Root of the saga tree
 */
export default function* rootSaga() {
  yield all([loginSaga()]);
}
