import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory, createMemoryHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import loggerMiddleware from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root.reducer";

const history = (global as any).jasmine ? createMemoryHistory() : createBrowserHistory();
export function getHistory() {
  return history;
}
const connectedReducer = connectRouter(history)(rootReducer);
export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  connectedReducer,
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history),
      loggerMiddleware,
      sagaMiddleware,
    ),
  ),
);

export default store;
