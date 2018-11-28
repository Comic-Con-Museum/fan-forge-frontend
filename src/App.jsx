import { sortOptions, defaultTag } from './utils/constants';
import { Feed, Submit, Navigation, Exhibit } from './components';
import { LanguageProvider } from './utils/Language';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import { colors } from './style/theme';
import axios from 'axios';

export class App extends Component {
  state = {
    feed: [],
    tags: [],
    filterTag: defaultTag,
    sortOption: sortOptions.RECENT,
    onLastPage: false,
    feedPageIndex: 0,
    errors: {},
    activeCalls: {}
  }

  createSetter = fieldToSet => newValue => {
    const newStateField = {};
    newStateField[fieldToSet] = newValue;
    this.setState(newStateField);
  }

  setters = Object.keys(this.state).reduce((acc, key) => {
    if (typeof acc[key] === 'Object') {
        acc[key] = newValue => this.setState((prev) => ({[key]: Object.assign({}, prev[key], newValue)}))
    } else {
      acc[key] = newValue => this.setState({[key]: newValue })
    }

    return acc;
  }, {})

  render() {
    const {tags, filterTag, sortOption, feed, feedPageIndex } = this.state
    return (
    <ThemeProvider theme={colors}>
      <Fragment>
        <Navigation
          tags={tags}
          filterTag={filterTag}
          sortOption={sortOption}
          setTags={this.setters.tags}
          setErrors={this.setters.errors}
          setFilterTag={this.setters.filterTag}
          setSortOption={this.setters.sortOption}
          setActiveCalls={this.setters.activeCalls}
        />
        <Switch>
          <Route exact path='/' render={props => (
            <Feed
              setActiveCalls={this.setters.activeCalls}
              setErrors={this.setters.errors}
              setFeed={this.setters.feed}
              feedPageIndex={feedPageIndex}
              sortOption={sortOption.value}
              filterTag={filterTag.value}
              feed={feed}
            />
          )} />
          <Route exact path='/submit' component={Submit}/>
          <Route path='/exhibit/:id' component={Exhibit} />
        </Switch>
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default App;