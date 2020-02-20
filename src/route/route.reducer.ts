import { Action } from '../root';
import { ACTION_TYPES, State } from '.';
import { UpdateRoutesSuccess } from './route.action';

export function handleUpdateRoutesSuccess(state: State, action: UpdateRoutesSuccess): State {
    return {
        ...state,
        route: action.newRoutes,
    };
}

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_ROUTES.SUCCESS:
            handleUpdateRoutesSuccess(state, action as UpdateRoutesSuccess);
    }
    return { ...state };
}
