import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRedux from './AppRedux';
import * as serviceWorker from './serviceWorker';
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";


import {createStore, applyMiddleware} from "redux";
import {gemReducer} from './reducer/gemReducer';

const store = createStore(gemReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRedux />
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
