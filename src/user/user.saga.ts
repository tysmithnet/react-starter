import { ACTIONS_TYPES, createUserFailureFactory, CreateUserRequest, createUserSuccessFactory } from '.';
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
    yield takeLatest(ACTIONS_TYPES.CREATE_USER.REQUEST, createUser);
}
