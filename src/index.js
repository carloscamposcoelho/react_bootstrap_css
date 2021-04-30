import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './layouts/Home';

import "./assets/css/style.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);