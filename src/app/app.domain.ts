import { IPermission, IUser } from "../auth/auth.domain";
import { IBaseProps } from "../root.domain";
import * as React from "react";

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

  /**
   * Creates the router to be used by the application
   */
  routerFactoryMethod?: () => any;
}

/**
 * State for the App route
 */
export interface IRootState {
  /**
   * Currently logged in user
   */
  user: IUser;

  /**
   * Currently active routes
   */
  routes: IRoute[];
}

/**
 * A navigatable section of the application
 */
export interface IRoute {
  /**
   * Component to be rendered when the route matches
   */
  component: React.ComponentClass;

  /**
   * Display name for the route
   */
  display: string;

  /**
   * true if the route should be strict when deciding if the route matches, false otherwise
   */
  exact: boolean;

  /**
   * Path to match against
   */
  path: string;

  /**
   * IPermissions required to access this route
   */
  permissions: IPermission[];
}
