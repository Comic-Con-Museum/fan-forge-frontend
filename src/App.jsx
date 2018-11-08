import React, { Component } from 'react';
 import { Switch, Route } from 'react-router-dom';

import {
  Feed,
  Submit,
  AdminPage
} from './pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Feed}/>
        <Route exact path='/submit' component={Submit}/>
        <Route exact path='/admin' component={AdminPage}/>
      </Switch>
    );
  }
}

export default App;
