import { reducer as app } from '../app';
import { reducer as auth } from '../auth';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer as route } from '../route';
import { reducer as theme } from '../theme';
import { reducer as user } from '../user';

/**
 *
 *
 * @export
 * @param {History} history
 */
export function createRootReducer(history: History) {
    return combineReducers({
        app,
        auth,
        route, // note: if this is "route" then it conflicts with the router
        router: connectRouter(history),
        theme,
        user,
    });
}
