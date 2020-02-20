import { filter, remove } from 'lodash';
import { State as RootState } from '../root';
import { RouteData } from '../route';
import { all, put, takeLatest } from 'redux-saga/effects';
import {
    updateRoutesFailureFactory,
    ACTION_TYPES,
    UpdateRoutesRequest,
    updateRoutesSuccessFactory,
    UpdateRoutesSuccess,
} from './route.action';

export function* updateRoutes(action: UpdateRoutesRequest) {
    try {
        const res = updateRoutesSuccessFactory(null, null, null, null);
        const routes: RouteData[] = [...action.current];
        if (!routes || !routes.length) {
            yield put(updateRoutesSuccessFactory(null, null, null, null));
        }
        let shouldHaveBeenRemoved = null;
        if (action.toRemove && action.toRemove.length) {
            const removed = remove(routes, r => action.toRemove.find(id => id == r.id));
            res.removed = removed;
            shouldHaveBeenRemoved = action.toRemove.filter(id => !removed.map(r => r.id).find(r => r == id));
        }
        let shouldHaveBeenUpdated = null;
        if (action.toUpdate && action.toUpdate.length) {
            const toUpdateIds = action.toUpdate.map(u => u.id);
            const updated = remove(routes, r => toUpdateIds.find(i => i == r.id));
            const updateRecords = updated.map(u => ({
                from: u,
                to: action.toUpdate.find(t => t.id == u.id),
            }));
            shouldHaveBeenUpdated = action.toUpdate.find(u => !updated.map(x => x.id).find(x => x == u.id));
            routes.push(...action.toUpdate);
            res.updated = updateRecords;
        }
        if (action.toAdd) {
            routes.push(...action.toAdd);
        }
        res.newRoutes = routes;
        yield put(res);
        if (shouldHaveBeenRemoved || shouldHaveBeenRemoved) {
            yield put(
                updateRoutesFailureFactory(
                    'Routes were not successfully changes',
                    shouldHaveBeenRemoved,
                    null,
                    shouldHaveBeenUpdated,
                ),
            );
        }
    } catch (err) {
        yield put(updateRoutesFailureFactory(err, null, null, null));
    }
}

export function* updateRoutesSaga() {
    yield takeLatest(ACTION_TYPES.UPDATE_ROUTES.REQUEST, updateRoutes);
}

export function* saga() {
    yield all([updateRoutesSaga()]);
}
