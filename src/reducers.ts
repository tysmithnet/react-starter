import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as app} from "./app/domain";
import {reducer as login} from "./auth/domain";

export default combineReducers({app, login});

export interface IAction {
    type: string;
}
