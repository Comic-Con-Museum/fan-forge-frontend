import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { sortOptions } from './constants';
import NavBar from './NavBar';
import {
  Feed,
  Submit
} from './pages';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTag: sortOptions[0],
      sortOption: sortOptions[0]
    };
  }

  createSetter = (fieldToSet) => (newValue) => {
    const newStateField = {};
    newStateField[fieldToSet] = newValue;
    this.setState(newStateField);
  }

  setFilterTag = this.createSetter('filterTag');
  setSortOption = this.createSetter('sortOption');

  render() {
    const {filterTag, sortOption} = this.state;
    return (
      <div>
        <NavBar 
          filterTag={filterTag} 
          sortOption={sortOption}
          setFilterTag={this.setFilterTag}
          setSortOption={this.setSortOption} />
        <Switch>
          <Route exact path='/' component={Feed}/>
          <Route exact path='/submit' component={Submit}/>
        </Switch>
      </div>
    );
  }
}

export default App;