import { RouteData } from '.';
import { Action, FailureAction } from '../root';

export const ACTION_TYPES = {
    UPDATE_ROUTES: {
        REQUEST: '@route/UpdateRoutes/Request',
        SUCCESS: '@route/UpdateRoutes/Success',
        FAILURE: '@route/UpdateRoutes/Failure',
    },
};

export interface RouteUpdate {
    from: RouteData;
    to: RouteData;
}

export interface UpdateRoutesRequest extends Action {
    current: RouteData[];
    toRemove: string[];
    toAdd: RouteData[];
    toUpdate: RouteData[];
}

export interface UpdateRoutesSuccess extends Action {
    newRoutes: RouteData[];
    removed: RouteData[];
    added: RouteData[];
    updated: RouteUpdate[];
}

export interface UpdateRoutesFailure extends FailureAction {
    failedRemove: string[];
    failedAdd: RouteData[];
    failedUpdate: RouteUpdate[];
}

export function updateRoutesRequestFactory(
    current: RouteData[],
    toRemove: string[],
    toAdd: RouteData[],
    toUpdate: RouteData[],
): UpdateRoutesRequest {
    return {
        current,
        toAdd,
        toRemove,
        toUpdate,
        type: ACTION_TYPES.UPDATE_ROUTES.REQUEST,
    };
}

export function updateRoutesSuccessFactory(
    newRoutes: RouteData[],
    removed: RouteData[],
    added: RouteData[],
    updated: RouteUpdate[],
): UpdateRoutesSuccess {
    return {
        added,
        newRoutes,
        removed,
        type: ACTION_TYPES.UPDATE_ROUTES.SUCCESS,
        updated,
    };
}

export function updateRoutesFailureFactory(
    message: string,
    failedRemove: string[],
    failedAdd: RouteData[],
    failedUpdate: RouteUpdate[],
): UpdateRoutesFailure {
    return {
        failedAdd,
        failedRemove,
        failedUpdate,
        message,
        type: ACTION_TYPES.UPDATE_ROUTES.FAILURE,
    };
}
