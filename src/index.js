import React from 'react';
import { createRoot } from "react-dom/client";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import './index.css';
import App from './components/App';
import reducer from './reducers'
import thunk from 'redux-thunk'
import logger from './middleware/logger'

const store = configureStore({ reducer: reducer, middleware: [thunk, logger] })

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

