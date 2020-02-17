import createSagaMiddleware from 'redux-saga';
import { reducer } from '.';
import rootSaga from './root.saga';
import { applyMiddleware, createStore } from 'redux';

const sagaMiddleware = createSagaMiddleware();
const middleWare = applyMiddleware(sagaMiddleware);
export const store = createStore(reducer, middleWare);

sagaMiddleware.run(rootSaga);
