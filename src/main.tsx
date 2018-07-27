import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import App, {reducer as appReducer} from "./app/App";
import rootSaga from "./sagas";

const rootReducer = combineReducers(appReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
// todo: add router, history, etc
ReactDOM.render((
    <Provider store={store}>
        <App user={{id: "", name: "ty", permissions: []}} />
    </Provider>),
    document.getElementById("root"));
