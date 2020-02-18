import { reducer as auth } from '../auth';
import { combineReducers } from 'redux';
import { reducer as theme } from '../theme';
import { reducer as users } from '../users';

export const reducer = combineReducers({
    auth,
    theme,
    users,
});
