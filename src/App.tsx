import * as React from "react";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { Menu } from "./menu/Menu";
import rootSaga from "./sagas";

export function reducer(state: any, action: any) {
  console.log("reducer called");
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

/**
 * @description The root component
 */
export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Menu name="menuuu" />
      </div>
    );
  }
}
