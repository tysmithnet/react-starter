import { IAction } from "../root.reducer";
import { IUser } from "./auth.domain";

/**
 * Represents a request to login
 */
export interface ILoginRequest extends IAction {
  id: string;
  password: string;
}

/**
 * Represents a successful login
 */
export interface ILoginSuccess extends IAction {
  user: IUser;
}

/**
 * Represents an unsuccessful login
 */
export interface ILoginFailure extends IAction {
  error: any;
}

/**
 * The types of actions possible
 */
export const ACTION_TYPES = {
  LOGIN_FAILURE: "@Auth/LoginFailure",
  LOGIN_REQUEST: "@Auth/LoginRequest",
  LOGIN_SUCCESS: "@Auth/LoginSuccess",
  UPDATE_FORM_REQUEST: "@Auth/UpdateFormRequest",
};

/**
 * Creates a login request
 * @param id User id to login
 * @param password Password to login
 */
export function requestLogin(id: string, password: string): ILoginRequest {
  return {
    id,
    password,
    type: ACTION_TYPES.LOGIN_REQUEST,
  };
}
