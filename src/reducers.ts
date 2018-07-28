import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as app} from "./app/domain";
import {reducer as auth} from "./auth/domain";

export default combineReducers({app, auth});

export interface IAction {
    type: string;
}
