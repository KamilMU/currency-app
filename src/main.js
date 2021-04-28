import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from './reducers';
import thunk from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(thunk))

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
