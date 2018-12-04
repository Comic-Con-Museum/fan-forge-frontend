import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import App from './App';
import './style/style';

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer admin'

const Root = document.getElementById('root');

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>
, Root);