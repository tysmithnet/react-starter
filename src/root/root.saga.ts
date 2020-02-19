import { all } from 'redux-saga/effects';
import { saga as auth } from '../auth';
import { saga as theme } from '../theme';
import { saga as users } from '../user';

/**
 * Root saga for the application. This saga will call all other sagas.
 * Sagas from sub domains that need to aggregate sagas should follow this
 * pattern.
 *
 * @export
 */
export function* saga() {
    yield all([auth(), theme(), users()]);
}
