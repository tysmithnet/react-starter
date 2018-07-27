import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import App from "./app/App";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
// todo: add router, history, etc
function render(component: JSX.Element) {
    console.log("rendering");
    ReactDOM.render((
        <AppContainer>
            <Provider store={store}>
                <App/>
            </Provider>
        </AppContainer>
    ), document.getElementById("root"));
}

render(<App />);
