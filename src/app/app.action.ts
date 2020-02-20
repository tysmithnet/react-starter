import { Action } from '../root';

export const ACTION_TYPES = {
    DRAWER_CHANGE: {
        REQUEST: '@app/DrawerChange/Change',
    },
    LOGIN_DIALOG_CHANGE: {
        REQUEST: '@app/LoginDialogChange/Change',
    },
};

export interface DrawerChangeRequest extends Action {
    isOpen: boolean;
}

export function drawerChangeRequestFactory(isOpen: boolean): DrawerChangeRequest {
    return {
        isOpen,
        type: ACTION_TYPES.DRAWER_CHANGE.REQUEST,
    };
}

export interface LoginDialogChangeRequest extends Action {
    isOpen: boolean;
}

export function loginDialogChangeRequestFactory(isOpen: boolean): LoginDialogChangeRequest {
    return {
        isOpen,
        type: ACTION_TYPES.LOGIN_DIALOG_CHANGE.REQUEST,
    };
}
