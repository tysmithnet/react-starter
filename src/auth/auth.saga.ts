import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES, ILoginRequest } from "./auth.action";

function* loginUser(id: string, password: string) {
  try {
    const res = yield axios.post("/api/auth", {
      id,
      password,
    });
    const result = yield res.data;
    yield put({
      type: ACTION_TYPES.LOGIN_SUCCESS,
      user: {
        id: result.id,
        name: result.name,
        permissions: result.permissions,
      },
    });
  } catch (error) {
    yield put({
      error,
      type: ACTION_TYPES.LOGIN_FAILURE,
    });
  }
}

export function* loginSaga() {
  yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, (action: ILoginRequest) => {
    return loginUser(action.id, action.password);
  });
}

export function* rootSaga() {
  yield all([loginSaga()]);
}
