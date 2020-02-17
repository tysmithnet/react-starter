import {reducer} from ".";
import rootSaga from "./root.saga";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleWare = applyMiddleware(sagaMiddleware)
export const store = createStore(reducer, middleWare);

sagaMiddleware.run(rootSaga);
