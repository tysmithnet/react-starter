import { IAction } from "../root.reducer";
import { ACTION_TYPES, ILoginRequest, ILoginSuccess } from "./auth.action";
import { IRootState } from "./auth.domain";

function handleLoginRequest(
  state: IRootState,
  action: ILoginRequest,
): IRootState {
  return {
    ...state,
  };
}

function handleLoginSuccess(
  state: IRootState,
  action: ILoginSuccess,
): IRootState {
  return {
    ...state,
    user: action.user,
  };
}

export function reducer(state: IRootState, action: IAction): IRootState {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_REQUEST:
      return handleLoginRequest(state, action as ILoginRequest);
    case ACTION_TYPES.LOGIN_SUCCESS:
      return handleLoginSuccess(state, action as ILoginSuccess);
  }
  return { ...state };
}
