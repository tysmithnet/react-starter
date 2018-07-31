import { IUser } from "../auth/auth.state";
import { IAction } from "../root.reducer";
import { IBaseProps } from "../root.state";

export interface IProps extends IBaseProps {
  user?: IUser;
}

export interface IState {
  user: IUser;
}

const ACTION_TYPES = {};

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
  }
  return {
    ...state,
  };
}
