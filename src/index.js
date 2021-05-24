import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from "styled-components";

import Home from './layouts/Home';

import "./assets/css/style.css"; //migrar para uso do styled components
import "./assets/css/root.css";
import { defaultTheme, greyTheme } from "./themes";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import your fontawesome library
import './fontawesome';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={defaultTheme}>
          <Route path="/" component={Home} />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);