import { Action } from '../root';
import { ACTION_TYPES, LoginSuccess, State } from '.';

/**
 *
 *
 * @param {State} state
 * @param {LoginSuccess} action
 * @returns {State}
 */
function handleLoginSuccess(state: State, action: LoginSuccess): State {
    return {
        ...state,
        user: action.user,
        jwt: action.jwt,
        permissions: action.permissions,
    };
}

/**
 *
 *
 * @export
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case ACTION_TYPES.LOGIN.SUCCESS:
            return handleLoginSuccess(state, action as LoginSuccess);
    }
    return { ...state };
}
