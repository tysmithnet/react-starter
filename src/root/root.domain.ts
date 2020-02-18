import { State as AuthState } from '../auth';
import { Action as ReduxAction } from 'redux';
import { AppTheme as ThemeState } from '../theme';
import { State as UserState } from '../users';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Action extends ReduxAction<string> {}

export interface FailureAction extends Action {
    message: string;
}

export interface Props {
    dispatch: () => void;
}

export interface State {
    auth: AuthState;
    theme: ThemeState;
    users: UserState;
}
