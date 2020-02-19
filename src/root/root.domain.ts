import { State as AuthState } from '../auth';
import { Action as ReduxAction } from 'redux';
import { RouterState } from 'connected-react-router';
import { AppTheme as ThemeState } from '../theme';
import { State as UserState } from '../users';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Action extends ReduxAction<string> {}

export interface FailureAction extends Action {
    message: string;
}

export interface Props {
    dispatch?: (action: Action) => void;
}

export interface State {
    auth: AuthState;
    router: RouterState;
    theme: ThemeState;
    users: UserState;
}

export interface Route {
    component: any; // todo: should be typed union?
    exact: boolean;
    path: string;
    permissions: string[];
}
