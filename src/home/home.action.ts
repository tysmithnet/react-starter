import { IAction } from "../root.reducer";

/**
 * Actions for the Home domain
 */
export const ACTION_TYPES = {
  START_ANIMATION_REQUEST: "@Home/StartAnimationRequest",
  START_ANIMATION_SUCCESS: "@Home/StartAnimationSuccess",
};

/**
 * Request to start the home animation
 */
export interface IAnimationStartRequest extends IAction {
  payload: HTMLDivElement;
}
