import { Dispatch } from "redux";
import { IUser } from "../auth/domain";
import { IAction } from "../reducers";
import { IBaseProps } from "../state";

export interface IProps extends IBaseProps {
    user?: IUser;
}

export interface IState {
    user: IUser;
}

export interface IUserChangeRequest extends IAction {
    user: IUser;
}

const ACTION_TYPES = {
    USER_CHANGE_REQUEST: "@App/ChangeUserRequest",
};

export function changeUser(user: IUser): IUserChangeRequest {
    return {type: ACTION_TYPES.USER_CHANGE_REQUEST, user};
}

export function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case ACTION_TYPES.USER_CHANGE_REQUEST:
            return reduceUserChangeRequest(state, action as IUserChangeRequest);
    }
    return {
        ...state,
    };
}

function reduceUserChangeRequest(state: IState, action: IUserChangeRequest): IState {
    return {
        ...state,
        user: action.user,
    };
}
