import * as React from "react";
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";

export function reducer(state: any, action: any) {
    console.log("reducer called");
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


export default class App extends React.Component <{}, {}>{
    render() {
        return <h1>hi!</h1>
    }
}4