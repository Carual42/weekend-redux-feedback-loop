import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feeling = (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        return Number(action.payload);
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

const understanding = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return Number(action.payload);
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

const support = (state='', action) => {
    if(action.type === 'SET_SUPPORT') {
        return Number(action.payload);
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

const comment = (state='', action) => {
    if(action.type === 'SET_COMMENT') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

// Redux store! Keeps track of all reducers
const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comment,
        }
    ),
    applyMiddleware()
);

ReactDOM.render(
    <Provider store={storeInstance}>
<App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
