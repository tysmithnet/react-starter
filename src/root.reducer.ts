import { combineReducers } from "redux";
import { reducer as app } from "./app/app.reducer";
import { reducer as auth } from "./auth/auth.reducer";

export default combineReducers({ app, auth });

/**
 * Base interface for actions
 *
 * @export
 * @interface IAction
 */
export interface IAction {
  /**
   * Identifying type name for the action
   *
   * @type {string}
   * @memberof IAction
   */
  type: string;
}
