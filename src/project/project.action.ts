import { Action, FailureAction } from '../root';
import { Project } from '../project';

export const ACTION_TYPES = {
    LOAD_PROJECTS: {
        REQUEST: '@project/LoadProjects/Request',
        SUCCESS: '@project/LoadProjects/Success',
        FAILURE: '@project/LoadProjects/Failure',
    },
};

export interface LoadProjectsRequest extends Action {
    pageNum: number;
    pageSize: number;
}

export interface LoadProjectsSuccess extends Action {
    projects: Project[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoadProjectsFailure extends FailureAction {}

export function loadProjectsRequestFactory(pageNum = 0, pageSize = 10): LoadProjectsRequest {
    return {
        pageNum,
        pageSize,
        type: ACTION_TYPES.LOAD_PROJECTS.REQUEST,
    };
}

export function loadProjectsSuccessFactory(projects: Project[]): LoadProjectsSuccess {
    return {
        projects,
        type: ACTION_TYPES.LOAD_PROJECTS.SUCCESS,
    };
}

export function loadProjectsFailureFactory(message: string): LoadProjectsFailure {
    return {
        message,
        type: ACTION_TYPES.LOAD_PROJECTS.FAILURE,
    };
}
