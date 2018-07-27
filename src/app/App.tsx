import * as React from "react";
import {connect} from "react-redux";
import { Menu } from "../menu/Menu";

export interface IPermission {
  id: string;
  name: string;
  description?: string;
}

export interface IUser {
  id: string;
  name: string;
  permissions: ArrayLike<IPermission>;
}

export interface IState {
  user: IUser;
}

export interface IAction {
  type: string;
}

export interface IUserChangeRequest extends IAction {
  user: IUser;
}

const ACTION_TYPES = {
  USER_CHANGE_REQUEST: "@App/ChangeUserRequest",
};

export function changeUser(user: IUser): IUserChangeRequest {
  return {
    type: ACTION_TYPES.USER_CHANGE_REQUEST,
    user,
  };
}

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case ACTION_TYPES.USER_CHANGE_REQUEST:
      return reduceUserChangeRequest(state, action as IUserChangeRequest);
  }
  return {...state};
}

function reduceUserChangeRequest(state: IState, action: IUserChangeRequest): IState {
  return {
    ...state,
    user: action.user,
  };
}

export interface IProps {
  user?: IUser;
}

class App extends React.Component<IProps> {
  public render() {
    let component: React.ReactNode = null;
    if (this.props.user) {
      component = <h1>Welcome {this.props.user.name}!</h1>;
    }

    return (
      <div>
        {component}
        <Menu name="menuuu" />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => state.user;

const connectedComponent =  connect(mapStateToProps)(App);
export default connectedComponent;
