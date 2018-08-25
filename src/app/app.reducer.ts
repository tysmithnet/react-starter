import { IAction } from "../root.reducer";
import { IRootState } from "./app.domain";

/**
 * Reducer for App
 * @param state Current state
 * @param action Action to apply to state
 */
export function reducer(state: IRootState, action: IAction): IRootState {
  switch (action.type) {
  }
  return {
    ...state,
  };
}
