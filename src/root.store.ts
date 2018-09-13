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
 * Get the history for routing purposes
 *
 * @export
 * @returns
 */
export function getHistory() {
  return history;
}
const connectedReducer = connectRouter(history)(rootReducer);

/**
 * The saga middleware
 */
export const sagaMiddleware = createSagaMiddleware();

/**
 * The root store
 */
const store = createStore(
  connectedReducer,
  {},
  compose(
    applyMiddleware(routerMiddleware(history), loggerMiddleware, sagaMiddleware),
  ),
);
export default store;
