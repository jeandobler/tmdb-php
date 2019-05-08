import React from 'react';
import ReactDOM from 'react-dom';
import {logger} from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import './index.css';
// import './assets/css/theme.css';
import * as serviceWorker from './serviceWorker';
import App from "./bootstrap/App";
import createSagaMiddleware from 'redux-saga';
import reducer from "./store/reducer";
import {Provider} from "react-redux";
import rootSaga from './sagas';


let sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducer,

    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={store}>
        <App/>

    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
