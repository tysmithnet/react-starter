import { Dispatch } from "redux";
import { IRootState as IAppState } from "./app/app.domain";
import { IRootState as IAuthState } from "./auth/auth.domain";

/**
 * Root of the state tree
 */
export interface IRootState {
  /**
   * App route state
   */
  app: IAppState;

  /**
   * Authorization state
   */
  auth: IAuthState;
}

/**
 * Base interface for all component props
 */
export interface IBaseProps {
  /**
   * The dispatch function
   */
  dispatch?: Dispatch;

  /**
   * Injection point for the worker factory method
   */
  createWorker?: () => Worker;
}
