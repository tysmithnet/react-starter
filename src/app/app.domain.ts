import { IPermission, IUser } from "../auth/auth.domain";
import { IBaseProps } from "../root.domain";

/**
 * Properties for App
 */
export interface IProps extends IBaseProps {
  /**
   * Currently logged in user
   */
  user?: IUser;

  /**
   * Currently active routes
   */
  routes: IRoute[];
}

/**
 * State for the App route
 */
export interface IState {
  user: IUser;
  routes: IRoute[];
}

/**
 * A navigatable section of the application
 */
export interface IRoute {
  component: React.ComponentClass;
  display: string;
  exact: boolean;
  path: string;
  permissions: IPermission[];
}
