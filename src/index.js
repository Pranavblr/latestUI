import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware  } from 'redux'
import rootReducer from './reducers'
import { fetchNetworkData } from './actions/networkActions'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@scuf/datatable/honeywell/theme.css';

const loggerMiddleware = createLogger()

const store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

store.dispatch(fetchNetworkData()).then(() => console.log(store.getState()))