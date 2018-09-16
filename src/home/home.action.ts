import { IAction } from "../root";

/**
 * Actions for the Home domain
 */
export const ACTION_TYPES = {
  START_ANIMATION_REQUEST: "@home/StartAnimationRequest",
  START_ANIMATION_SUCCESS: "@home/StartAnimationSuccess",
};

/**
 * Represents a request to play the starting animation for the
 * home route
 *
 * @export
 * @interface IAnimationStartRequest
 * @extends {IAction}
 */
export interface IAnimationStartRequest extends IAction {
  /**
   * Reference to the DOM element that should be animated
   *
   * @type {HTMLElement}
   * @memberof IAnimationStartRequest
   */
  payload: HTMLElement;
}
