import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './layouts/Home';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

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