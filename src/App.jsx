import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { sortOptions, appURL } from './constants';
import NavBar from './NavBar';
import { ThemeProvider } from 'styled-components';

import {
  Feed,
  Submit
} from './pages';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTag: sortOptions.RECENT,
      sortOption: sortOptions.RECENT,
      feedPageIndex: 0,
      onLastPage: false,
      loading: true,
      error: undefined
    };
  }
  
  fetchFeed = async () => {
    const  {feedPageIndex, sortOption } = this.state;
    try {
      const feed = await axios.get(`${appURL}/feed/${sortOption.value}?startIdx=${feedPageIndex}`);
      return feed.data;
    } catch (err) {
        // TODO: implement error handling
        console.log(err);
    }
  }
  
  fetchTags = async () => {
    return 1;
  }

  async componentDidMount () {
    const feedFetcher = this.fetchFeed();
    const tagFetcher = this.fetchTags();

    // TODO: implement error handling
    const {exhibits, count, pageSize} =  await feedFetcher;

    this.setState((prevState) => ({
      content: exhibits,
      onLastPage: prevState.feedPageIndex > count,
      tags: tagFetcher,
      loading: false
    }));
  }

  shouldUpdateFeed = prevState => prevState.sortOption.value !== this.state.sortOption.value 
    || prevState.filterTag.value !== this.state.filterTag.value
    || prevState.feedPageIndex !== this.state.feedPageIndex;

  updateFeed = async () => {
    this.setState({
      loading: true
    });

    const feedFetcher = this.fetchFeed();
      // TODO: implement error handling
    const {exhibits, count, pageSize} =  await feedFetcher;

    this.setState((prevState) => ({
      content: exhibits,
      onLastPage: prevState.feedPageIndex > count,
      loading: false
    }));
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    if (this.shouldUpdateFeed(prevState)) {
      this.updateFeed();
    }
  }

  createSetter = fieldToSet => newValue => {
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
      </div>
    );
  }
}

export default App;