import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ClientApp from './ClientApp';
import './style/style.scss';

const Root = document.getElementById('root');

ReactDOM.render(
<BrowserRouter>
    <ClientApp />
</BrowserRouter>
, Root);