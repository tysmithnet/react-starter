import { Action } from 'redux';
import { State } from '.';

/**
 *
 *
 * @export
 * @param {State} [state=mockState]
 * @param {Action} action
 * @returns {State}
 */
export function reducer(state: State, action: Action): State {
    return {
        ...state,
    };
}
