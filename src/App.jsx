import React, { Component } from 'react';
 import { Switch, Route } from 'react-router-dom';

import {
  Feed,
  Submit
} from './pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Feed}/>
        <Route exact path='/submit' component={Submit}/>
      </Switch>
    );
  }
}

export default App;