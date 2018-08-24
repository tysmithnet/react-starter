import {History} from "history";
import { Route } from "react-router";
import { IPermission, IUser } from "../auth/auth.state";
import { IAction } from "../root.reducer";
import { IBaseProps } from "../root.state";

export interface IProps extends IBaseProps {
  user?: IUser;
  routes: IRoute[];
}

export interface IState {
  user: IUser;
  routes: IRoute[];
}

export interface IRoute {
  component: React.ComponentClass;
  exact: boolean;
  path: string;
  permissions: IPermission[];
}

const ACTION_TYPES = {};

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
  }
  return {
    ...state,
  };
}
