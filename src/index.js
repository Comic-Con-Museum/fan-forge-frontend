import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const Root = document.getElementById('root');

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>
, Root);