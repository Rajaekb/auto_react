import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './includes/bootstrap';
import "typeface-roboto";

import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter basename="/automobile">
  
    <App />
  
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);



