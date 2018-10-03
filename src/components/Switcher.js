import React from 'react'
import { Route } from 'react-router-dom'

import About from './About'
import Detail from './Detail'
import Entry from './Entry'
import Feed from './Feed'
import Home from './Home'

import '../css/Switcher.css'

const Switcher = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/detail/:id' component={Detail} />
    <Route exact path='/submit' component={Entry} />
    <Route exact path='/feed' component={Feed} />
  </div>
);

export default Switcher
