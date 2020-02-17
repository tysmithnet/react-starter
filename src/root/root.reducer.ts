import { combineReducers } from "redux";
import { reducer as users } from "../users";

export const reducer = combineReducers({
    users,
});
