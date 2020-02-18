import { AppTheme } from '.';
import { State as RootState } from '../root';
import { ACTION_TYPES, changeThemeFailureFactory, ChangeThemeRequest, changeThemeSuccessFactory } from './theme.action';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { put, select, takeLatest } from 'redux-saga/effects';

/**
 *
 *
 * @param {ChangeThemeRequest} action
 */
function* changeTheme(action: ChangeThemeRequest) {
    if (action.theme == null && action.toggleLightDark == null) {
        yield put(changeThemeFailureFactory('Theme or request to toggle must be provided, but found neither'));
        return;
    }
    if (action.theme) {
        yield put(changeThemeSuccessFactory(action.theme));
    } else {
        const currentTheme: AppTheme = yield select((state: RootState) => state.theme);
        const type = currentTheme.palette.type == 'light' ? 'dark' : 'light';
        const newTheme: AppTheme = {
            ...currentTheme,
            palette: {
                ...currentTheme.palette,
                type,
            },
        };
        yield put(changeThemeSuccessFactory(newTheme));
    }
}

/**
 *
 *
 * @export
 */
export function* saga() {
    yield takeLatest(ACTION_TYPES.CHANGE_THEME.REQUEST, changeTheme);
}
