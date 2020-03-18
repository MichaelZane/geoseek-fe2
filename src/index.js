import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRedux from './AppRedux';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
;


=======
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";


import {createStore, applyMiddleware} from "redux";
import {gemReducer} from './reducer/gemReducer';
>>>>>>> 9b5e8e0fd5eac9360fd9255b200c150826b5295b


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRedux/>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
