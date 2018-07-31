import { applyMiddleware, createStore } from "redux";
import loggerMiddleware from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root.reducer";

export const sagaMiddleware = createSagaMiddleware();
export default createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, sagaMiddleware),
);
