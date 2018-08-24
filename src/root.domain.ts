import { Dispatch } from "redux";
import { IState as IAppState } from "./app/app.domain";
import { IRootState as IAuthState } from "./auth/auth.domain";

export interface IRootState {
  app: IAppState;
  auth: IAuthState;
}

export interface IBaseProps {
  dispatch?: Dispatch;
}
