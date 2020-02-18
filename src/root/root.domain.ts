import { Action as ReduxAction } from 'redux';
import { Theme } from '@material-ui/core/styles';
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
    theme: Theme;
    users: UserState;
}