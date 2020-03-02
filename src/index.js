import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'

import './css/index.css';
import App from './App';
import { reducer } from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
   <Router>
      <Provider store={store}>
         <App />
      </Provider>
   </Router>
   , document.getElementById('root'));
