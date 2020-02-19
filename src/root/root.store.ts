import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createRootReducer, saga, State } from '.';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middleWare = applyMiddleware(routeMiddleware, sagaMiddleware);

/**
 *
 *
 * @export
 * @param {State} state
 */
export function configureStore(state?: State) {
    const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(createRootReducer(history), state, composeEnhancer(middleWare));
    sagaMiddleware.run(saga);
    return store;
}
