import { all } from 'redux-saga/effects';
import { saga as users } from '../users';

/**
 * Root saga for the application. This saga will call all other sagas.
 * Sagas from sub domains that need to aggregate sagas should follow this
 * pattern.
 *
 * @export
 */
export default function* saga() {
    yield all([users()]);
}
