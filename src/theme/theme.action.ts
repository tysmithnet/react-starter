import { AppTheme } from '.';
import { Action, FailureAction } from '../root';

export const ACTION_TYPES = {
    CHANGE_THEME: {
        REQUEST: '@theme/ChangeTheme/Request',
        SUCCESS: '@theme/ChangeTheme/Success',
        FAILURE: '@theme/ChangeTheme/Failure',
    },
};

export interface ChangeThemeRequest extends Action {
    currentTheme: AppTheme;
    theme?: AppTheme;
    toggleLightDark?: boolean;
}

/**
 * Create a change theme request action
 *
 * @export
 * @param theme - Theme to change to if provided
 * @param toggleLightDark - Toggle between the light and dark themes if provided
 * @returns {ChangeThemeRequest}
 */
export function changeThemeRequestFactory(
    currentTheme: AppTheme,
    theme?: AppTheme,
    toggleLightDark?: boolean,
): ChangeThemeRequest {
    return {
        currentTheme,
        theme,
        toggleLightDark,
        type: ACTION_TYPES.CHANGE_THEME.REQUEST,
    };
}

export interface ChangeThemeSucces extends Action {
    theme: AppTheme;
}

/**
 *
 *
 * @export
 * @param {Theme} theme
 * @returns {ChangeThemeSucces}
 */
export function changeThemeSuccessFactory(theme: AppTheme): ChangeThemeSucces {
    return {
        theme,
        type: ACTION_TYPES.CHANGE_THEME.SUCCESS,
    };
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChangeThemeFailure extends FailureAction {}

/**
 *
 *
 * @export
 * @param {string} message
 * @returns {ChangeThemeFailure}
 */
export function changeThemeFailureFactory(message: string): ChangeThemeFailure {
    return {
        message,
        type: ACTION_TYPES.CHANGE_THEME.FAILURE,
    };
}
