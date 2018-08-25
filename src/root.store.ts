import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory, createMemoryHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import loggerMiddleware from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root.reducer";

// You cannot use browser history in jest tests
const history = (global as any).jasmine
  ? createMemoryHistory()
  : createBrowserHistory();

/**
 * Gets the configured history
 */
export function getHistory() {
  return history;
}
const connectedReducer = connectRouter(history)(rootReducer);

/**
 * The saga middleware
 */
export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  connectedReducer,
  {},
  compose(
    applyMiddleware(routerMiddleware(history), loggerMiddleware, sagaMiddleware),
  ),
);

/**
 * The central store
 */
export default store;
