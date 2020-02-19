import { reducer as auth } from '../auth';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer as theme } from '../theme';
import { reducer as users } from '../user';

/**
 *
 *
 * @export
 * @param {History} history
 */
export function createRootReducer(history: History) {
    return combineReducers({
        auth,
        router: connectRouter(history),
        theme,
        users,
    });
}
