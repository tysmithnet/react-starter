import { State as AppState } from '../app';
import { State as AuthState } from '../auth';
import { Action as ReduxAction } from 'redux';
import { State as RouteState } from '../route';
import { RouterState } from 'connected-react-router';
import { Theme } from '@material-ui/core/styles';
import { AppTheme as ThemeState } from '../theme';
import { State as UserState } from '../user';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Action extends ReduxAction<string> {}

export interface FailureAction extends Action {
    message: string;
}

export interface Props {
    dispatch?: (action: Action) => void;
}

export interface State {
    app: AppState;
    auth: AuthState;
    route: RouteState;
    router: RouterState;
    theme: ThemeState;
    user: UserState;
}

export interface Route {
    component: any; // todo: should be typed union?
    exact: boolean;
    path: string;
    permissions: string[];
}
