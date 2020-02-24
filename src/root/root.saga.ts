import { all } from 'redux-saga/effects';
import { saga as app } from '../app';
import { saga as auth } from '../auth';
import { saga as project } from '../project';
import { saga as route } from '../route';
import { saga as theme } from '../theme';
import { saga as user } from '../user';

/**
 * Root saga for the application. This saga will call all other sagas.
 * Sagas from sub domains that need to aggregate sagas should follow this
 * pattern.
 *
 * @export
 */
export function* saga() {
    yield all([app(), auth(), project(), route(), theme(), user()]);
}
