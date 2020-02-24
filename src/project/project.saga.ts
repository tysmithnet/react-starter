
import { DateTime } from 'luxon';
import axios from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import { Project } from './project.domain';
import { loadProjectsSuccessFactory, loadProjectsFailureFactory } from './project.action';

function* preloadProjects(action: any) {
    try {
        if(action.payload.location.pathname != "/projects")
            return;
        const response = yield axios.get(`api/projects`);
        const projects = response.data;
        const converted: Project[] = projects.map(p => ({
            id: p.id,
            name: p.name,
            createdBy: p.uname,
            createdUtc: DateTime.fromISO(p.created_utc, { zone: 'utc' }),
        }));
        yield put(loadProjectsSuccessFactory(converted));
    } catch (err) {
        yield put(loadProjectsFailureFactory(err));
    }
}

function* preloadProjectsSaga() {
    yield takeLatest('@@router/LOCATION_CHANGE', preloadProjects);
}

export function* saga() {
    yield all([preloadProjectsSaga()]);
}
