import { IAction } from "../reducers";
import { IBaseProps } from "../state";

export interface IPermission {
    id: string;
    name: string;
    description?: string;
}

export interface IUser {
    id: string;
    name: string;
    permissions: ArrayLike < IPermission >;
}

export interface ILoginRequest extends IAction {
    id: string;
    password: string;
}

const ACTION_TYPES = {
    LOGIN_REQUEST: "@App/LoginRequest",
};

export function requestLogin(id: string, password: string): ILoginRequest {
    return {
        id,
        password,
        type: ACTION_TYPES.LOGIN_REQUEST,
    };
}

export interface IProps extends IBaseProps {
  id?: string;
  password?: string;
}

export type IState = IProps;

function handleLoginRequest(state: IState, action: ILoginRequest) {
    return {
        ...state,
    };
}

export function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_REQUEST:
            return handleLoginRequest(state, action as ILoginRequest);
    }
    return {...state};
}
