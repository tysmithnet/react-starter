import { IAction } from "../root.reducer";
import { IState } from "./app.domain";

/**
 * Reducer for App
 * @param state Current state
 * @param action Action to apply to state
 */
export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
  }
  return {
    ...state,
  };
}
