import { IAction } from "../root.reducer";
import { IState } from "./app.domain";

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
  }
  return {
    ...state,
  };
}
