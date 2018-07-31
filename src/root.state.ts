import { Dispatch } from "redux";
import { IState as IAppState } from "./app/domain";
import { IRootState as IAuthState } from "./auth/auth.state";

export interface IRootState {
  app: IAppState;
  auth: IAuthState;
}

export interface IBaseProps {
  dispatch?: Dispatch;
}
