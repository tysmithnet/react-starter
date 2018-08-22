import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import loggerMiddleware from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root.reducer";

export const history = createBrowserHistory();
const connectedReducer = connectRouter(history)(rootReducer);
export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  connectedReducer,
  {},
  compose(
    applyMiddleware(
      loggerMiddleware,
      sagaMiddleware,
      routerMiddleware(history),
    ),
  ),
);

export default store;
