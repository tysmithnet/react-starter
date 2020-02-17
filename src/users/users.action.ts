import { User } from ".";
import { Action, FailureAction } from "../root";

export const ACTIONS = {
    CREATE_USER: {
        REQUEST: "@users/CreateUser/Request",
        SUCCESS: "@users/CreateUser/Success",
        FAILURE: "@users/CreateUser/Failure"
    }
}

export interface CreateUserRequest extends Action {
    user: User;
}

export function createUserRequestFactory(user: User): CreateUserRequest {
    return {
        type: ACTIONS.CREATE_USER.REQUEST,
        user
    };
}

export interface CreateUserSuccess extends Action {
    user: User;
}

export function createUserSuccessFactory(user: User): CreateUserSuccess {
    return {
        type: ACTIONS.CREATE_USER.SUCCESS,
        user
    };
}

export interface CreateUserFailure extends FailureAction {
    user: User;
}

export function createUserFailureFactory(user: User, message: string): CreateUserFailure {
    return {
        type: ACTIONS.CREATE_USER.FAILURE,
        user,
        message
    };
}