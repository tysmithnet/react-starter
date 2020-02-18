import { Action } from '../root';
import { ACTION_TYPES, AppTheme, ChangeThemeSucces } from '.';

const defaultTheme: AppTheme = {
    palette: {
        type: 'light',
    },
};

/**
 *
 *
 * @param {RootState} state
 * @param {ChangeThemeSucces} action
 * @returns {RootState}
 */
function handleChangeTheme(state: AppTheme, action: ChangeThemeSucces): AppTheme {
    return {
        ...action.theme,
    };
}

/**
 *
 *
 * @export
 * @param {RootState} state
 * @param {Action} action
 * @returns {RootState}
 */
export function reducer(state: AppTheme = defaultTheme, action: Action): AppTheme {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_THEME.SUCCESS:
            return handleChangeTheme(state, action as ChangeThemeSucces);
    }
    return { ...state };
}
