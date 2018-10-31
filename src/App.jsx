import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import {
  Feed,
  Submit
} from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Feed}/>
          <Route exact path='/submit' component={Submit}/>
        </Switch>
      </div>
    );
  }
}

export default App;