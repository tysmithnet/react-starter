import { ACTION_TYPES, AuthResponse, loginFailureFactory, LoginRequest, loginSuccessFactory } from '.';
import axios, { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/**
 *
 *
 * @export
 * @param {LoginRequest} action
 */
export function* login(action: LoginRequest) {
    try {
        const res: AxiosResponse<AuthResponse> = yield axios.post('/api/auth', {
            username: action.username,
            password: action.password,
        });
        if (res.status == 200) {
            yield put(loginSuccessFactory(res.data.user, res.data.jwt, res.data.permissions));
        } else {
            yield put(loginFailureFactory('Invalid credentials'));
        }
    } catch (err) {
        yield put(loginFailureFactory(err));
    }
}

/**
 *
 *
 * @export
 */
export function* saga() {
    yield takeLatest(ACTION_TYPES.LOGIN.REQUEST, login);
}
