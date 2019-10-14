//React import
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//Local imports
import { Routes } from './components/Routes';
import allReducers from './reducers';
import './css/main.css';

//Create store and include the dev tools extension for redux
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Render to the dom and wrap with Provider tag for Redux
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector('#root')
);
