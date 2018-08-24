import { IAction } from "../root.reducer";
import { IUser } from "./auth.domain";

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

export const ACTION_TYPES = {
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
