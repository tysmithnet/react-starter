import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES, ILoginRequest } from "./auth.action";
import { Permissions } from "./auth.state";

function* loginUser(id: string, password: string) {
  try {
    const res = yield axios.post("/api/auth", {
      id,
      password,
    });
    const result = yield res.data;
    const permissions = [];
    for (const p of result.permissions) {
      const lookup = Permissions.get(p);
      if (lookup) {
        permissions.push(lookup);
      }
    }
    yield put({
      type: ACTION_TYPES.LOGIN_SUCCESS,
      user: {
        id: result.id,
        name: result.name,
        permissions,
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
