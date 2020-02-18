import { User } from '../users';
import { Action, FailureAction } from '../root';

export const ACTION_TYPES = {
    LOGIN: {
        REQUEST: '@auth/Login/Request',
        SUCCESS: '@auth/Login/Success',
        FAILURE: '@auth/Login/Failure',
    },
};

export interface LoginRequest extends Action {
    username: string;
    password: string;
}

/**
 *
 *
 * @export
 * @param {string} username
 * @param {string} password
 * @returns {LoginRequest}
 */
export function loginRequestFactory(username: string, password: string): LoginRequest {
    return {
        password,
        type: ACTION_TYPES.LOGIN.REQUEST,
        username,
    };
}

export interface LoginSuccess extends Action {
    user: User;
    jwt: string;
    permissions: string[];
}

/**
 *
 *
 * @export
 * @param {string} username
 * @param {string} password
 * @returns {LoginRequest}
 */
export function loginSuccessFactory(user: User, jwt: string, permissions: string[]): LoginSuccess {
    return {
        jwt,
        permissions,
        type: ACTION_TYPES.LOGIN.SUCCESS,
        user,
    };
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoginFailure extends FailureAction {}

/**
 *
 *
 * @export
 * @param {string} message
 * @returns {LoginFailure}
 */
export function loginFailureFactory(message: string): LoginFailure {
    return {
        message,
        type: ACTION_TYPES.LOGIN.FAILURE,
    };
}
