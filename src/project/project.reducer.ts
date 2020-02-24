import { State } from './project.domain';
import { Action } from '../root';
import { LoadProjectsSuccess, ACTION_TYPES } from './project.action';

function handleLoadProjects(state: State, action: LoadProjectsSuccess): State {
    return {
        ...state,
        projects: action.projects,
    };
}

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case ACTION_TYPES.LOAD_PROJECTS.SUCCESS:
            return handleLoadProjects(state, action as LoadProjectsSuccess);
    }
    return {
        ...state,
    };
}
