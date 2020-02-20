import { User } from '.';
import { Action, FailureAction } from '../root';

export const ACTIONS_TYPES = {
    CREATE_USER: {
        REQUEST: '@user/CreateUser/Request',
        SUCCESS: '@user/CreateUser/Success',
        FAILURE: '@user/CreateUser/Failure',
    },
};

export interface CreateUserRequest extends Action {
    user: User;
}

/**
 *
 *
 * @export
 * @param {User} user
 * @returns {CreateUserRequest}
 */
export function createUserRequestFactory(user: User): CreateUserRequest {
    return {
        type: ACTIONS_TYPES.CREATE_USER.REQUEST,
        user,
    };
}

export interface CreateUserSuccess extends Action {
    user: User;
}

/**
 *
 *
 * @export
 * @param {User} user
 * @returns {CreateUserSuccess}
 */
export function createUserSuccessFactory(user: User): CreateUserSuccess {
    return {
        type: ACTIONS_TYPES.CREATE_USER.SUCCESS,
        user,
    };
}

export interface CreateUserFailure extends FailureAction {
    user: User;
}

/**
 *
 *
 * @export
 * @param {User} user
 * @param {string} message
 * @returns {CreateUserFailure}
 */
export function createUserFailureFactory(user: User, message: string): CreateUserFailure {
    return {
        type: ACTIONS_TYPES.CREATE_USER.FAILURE,
        user,
        message,
    };
}
