import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './reducers'

const store = configureStore({reducer : RootReducer})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)