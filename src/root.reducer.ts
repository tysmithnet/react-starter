import { combineReducers } from "redux";
import { reducer as app } from "./app/app.reducer";
import { reducer as auth } from "./auth/auth.reducer";

export default combineReducers({ app, auth });

/**
 * Base action interface
 */
export interface IAction {
  /**
   * Action type
   */
  type: string;
}
