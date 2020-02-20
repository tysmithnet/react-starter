import { ACTION_TYPES, State } from '.';
import { Action } from '../root';
import { ACTION_TYPES as AUTH_ACTIONS, LoginSuccess, LoginFailure } from '../auth';
import { DrawerChangeRequest, LoginDialogChangeRequest } from './app.action';

function handleLoginSuccess(state: State, action: LoginSuccess): State {
    return {
        ...state,
        ui: {
            ...state.ui,
            loginOpen: false,
            loginError: null,
        },
    };
}

function handleLoginFailure(state: State, action: LoginFailure): State {
    return {
        ...state,
        ui: {
            ...state.ui,
            loginError: 'Login failed, try again.', // todo: get from action?
        },
    };
}

function handleDrawerChange(state: State, action: DrawerChangeRequest): State {
    return {
        ...state,
        ui: {
            ...state.ui,
            drawerOpen: action.isOpen,
        },
    };
}

function handleLoginDialogChange(state: State, action: LoginDialogChangeRequest): State {
    return {
        ...state,
        ui: {
            ...state.ui,
            loginOpen: action.isOpen,
        },
    };
}

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case AUTH_ACTIONS.LOGIN.SUCCESS:
            return handleLoginSuccess(state, action as LoginSuccess);
        case AUTH_ACTIONS.LOGIN.FAILURE:
            return handleLoginFailure(state, action as LoginFailure);
        case ACTION_TYPES.DRAWER_CHANGE.REQUEST:
            return handleDrawerChange(state, action as DrawerChangeRequest);
        case ACTION_TYPES.LOGIN_DIALOG_CHANGE.REQUEST:
            return handleLoginDialogChange(state, action as LoginDialogChangeRequest);
    }
    return {
        ...state,
    };
}
