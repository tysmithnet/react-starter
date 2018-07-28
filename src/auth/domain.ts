import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAction } from "../reducers";
import { IBaseProps } from "../state";

export interface IRootState {
    user: IUser;
}

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

export interface ILoginSuccess extends IAction {
    user: IUser;
}

export interface ILoginFailure extends IAction {
    error: any;
}

const ACTION_TYPES = {
    LOGIN_FAILURE: "@Auth/LoginFailure",
    LOGIN_REQUEST: "@Auth/LoginRequest",
    LOGIN_SUCCESS: "@Auth/LoginSuccess",
    UPDATE_FORM_REQUEST: "@Auth/UpdateFormRequest",
};

export function requestLogin(id: string, password: string): ILoginRequest {
    return {
        id,
        password,
        type: ACTION_TYPES.LOGIN_REQUEST,
    };
}

export type IProps = IBaseProps;

export interface IState {
    id?: string;
    password?: string;
}

function handleLoginRequest(state: IState, action: ILoginRequest): IState {
    return {
        ...state,
    };
}

function handleLoginSuccess(state: IState, action: ILoginSuccess): IState {
    return {
        ...state,
    };
}

export function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_REQUEST:
            return handleLoginRequest(state, action as ILoginRequest);
        case ACTION_TYPES.LOGIN_SUCCESS:
            return handleLoginSuccess(state, action as ILoginSuccess);
    }
    return {...state};
}

function* loginUser(id: string, password: string) {
    try {
        const res = yield fetch("/api/auth", {
            body: JSON.stringify({
                id,
                password,
            }),
            method: "POST",
        });
        const result = yield call([res, res.json]);
        yield put({
            type: ACTION_TYPES.LOGIN_SUCCESS,
            user: {
                id: result.body.id,
                name: result.body.name,
                permissions: result.body.permissions,
            },
        });
    } catch (error) {
        yield put({
            error,
            type: ACTION_TYPES.LOGIN_FAILURE,
        });
    }
}



export function* loginSaga() {
    yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, (action: ILoginRequest) => {
        return loginUser(action.id, action.password);
    });
}

export function* rootSaga() {
    yield all([loginSaga()]);
}
