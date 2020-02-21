import { Action } from '../root';
import { ACTION_TYPES, State, DEFAULT_ROUTES } from '.';
import { UpdateRoutesSuccess } from './route.action';

export function handleUpdateRoutesSuccess(state: State, action: UpdateRoutesSuccess): State {
    return {
        ...state,
        route: action.newRoutes,
    };
}

export function reducer(state: State = { route: DEFAULT_ROUTES }, action: Action): State {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_ROUTES.SUCCESS:
            handleUpdateRoutesSuccess(state, action as UpdateRoutesSuccess);
    }
    return { ...state };
}
