import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers' 
import 'bulma/css/bulma.css';
import './styles.scss';
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger))
console.log(store)

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
