import { all, call, put, takeLatest } from "redux-saga/effects";
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

export interface ILoginSuccess extends IAction {
    user: IUser;
}

export interface ILoginFailure extends IAction {
    error: any;
}

export interface IUpdateFormRequest extends IAction {
    id?: string;
    password?: string;
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

export function requestFormUpdate(form: IProps): IUpdateFormRequest {
    return {
        id: form.id,
        password: form.password,
        type: ACTION_TYPES.UPDATE_FORM_REQUEST,
    };
}

export interface IProps extends IBaseProps {
  id?: string;
  password?: string;
}

export interface IState {
    user?: IUser;
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

function handleFormUpdateRequest(state: IState, action: IUpdateFormRequest): IState {
    const {id, password} = action;
    return {
        ...state,
        id: id || "",
        password: password || "",
    };
}

export function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_REQUEST:
            return handleLoginRequest(state, action as ILoginRequest);
        case ACTION_TYPES.LOGIN_SUCCESS:
            return handleLoginSuccess(state, action as ILoginSuccess);
        case ACTION_TYPES.UPDATE_FORM_REQUEST:
            return handleFormUpdateRequest(state, action as IUpdateFormRequest);
    }
    return {...state};
}

function* loginUser(id: string, password: string) {
    debugger;
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
        debugger;
        return loginUser(action.id, action.password);
    });
}

export function* rootSaga() {
    yield all([loginSaga()]);
}
