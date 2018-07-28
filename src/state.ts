import { Dispatch } from "redux";
import {IState as IAppState} from "./app/domain";
import {IState as ILoginState} from "./auth/domain";

export interface IRootState {
    app: IAppState;
    auth: ILoginState;
}

export interface IBaseProps {
    dispatch?: Dispatch;
}
