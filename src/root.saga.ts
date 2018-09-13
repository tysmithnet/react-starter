import { all } from "redux-saga/effects";
import authSaga from "./auth/auth.saga";
import homeSaga from "./home/home.saga";

/**
 * Root of the saga tree
 */
export default function* rootSaga() {
  yield all([authSaga(), homeSaga()]);
}
