import { Dispatch } from "redux";
import { IState as IAppState } from "./app/app.domain";
import { IRootState as IAuthState } from "./auth/auth.domain";

/**
 * Root of the state tree
 */
export interface IRootState {
  app: IAppState;
  auth: IAuthState;
}

/**
 * Base interface for all component props
 */
export interface IBaseProps {
  dispatch?: Dispatch;
}
