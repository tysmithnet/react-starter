import { ACTIONS, createUserFailureFactory, CreateUserRequest, createUserSuccessFactory } from './users.action';
import { put, takeLatest } from 'redux-saga/effects';

/**
 *
 *
 * @param {CreateUserRequest} action
 */
function* createUser(action: CreateUserRequest) {
    try {
        yield put(createUserSuccessFactory(action.user));
    } catch (error) {
        yield put(createUserFailureFactory(action.user, 'Problem creating user'));
    }
}

/**
 *
 *
 * @export
 */
export function* saga() {
    yield takeLatest(ACTIONS.CREATE_USER.REQUEST, createUser);
}
