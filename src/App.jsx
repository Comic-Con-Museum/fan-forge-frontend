import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { sortOptions, appURL, defaultTag } from './constants';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import { ThemeProvider } from 'styled-components';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      exhibits: [],
      loading: true,
      error: undefined,
      feedPageIndex: 0,
      onLastPage: false,
      activeTag: defaultTag,
      sortOption: sortOptions.RECENT
    };
  }
  
  fetchFeed = async () => {
    const  {feedPageIndex, sortOption, activeTag } = this.state;
    try {
      const feed = await axios.get(`${appURL}/feed/${sortOption.value}`, {
        params: {
          startIdx: feedPageIndex,
          tag: activeTag.value !== defaultTag.value ? activeTag.value : undefined,
        },
      });

      return feed.data;
    } catch (err) {
        // TODO: implement error handling
        console.log(err);
    }
  }
  
  fetchTags = async () => {
    try {
      const tags = await axios.get(`${appURL}/tags`);
      return tags.data;
    } catch (err) {
      // TODO: implement error handling
      console.log(err)
    }
  }

  async componentDidMount () {
    const feedFetcher = this.fetchFeed();
    const tags = await this.fetchTags();

    // TODO: implement error handling
    const {exhibits, count, pageSize} =  await feedFetcher;
    const labeledTags = tags.map(tag => ({
      label: tag,
      value: tag
    }));
    
    labeledTags.unshift(defaultTag);

    this.setState((prevState) => ({
      exhibits: exhibits,
      onLastPage: prevState.feedPageIndex > count,
      tags: labeledTags,
      loading: false
    }));
  }

  shouldUpdateFeed = prevState => prevState.sortOption.value !== this.state.sortOption.value 
    || prevState.activeTag.value !== this.state.activeTag.value
    || prevState.feedPageIndex !== this.state.feedPageIndex;

  updateFeed = async () => {
    this.setState({
      loading: true
    });

    const feedFetcher = this.fetchFeed();
      // TODO: implement error handling
    const {exhibits, count, pageSize} =  await feedFetcher;

    this.setState((prevState) => ({
      exhibits: exhibits,
      onLastPage: prevState.feedPageIndex > count,
      loading: false
    }));
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.shouldUpdateFeed(prevState)) {
      this.updateFeed();
    }
  }

  createSetter = fieldToSet => newValue => {
    const newStateField = {};
    newStateField[fieldToSet] = newValue;
    this.setState(newStateField);
  }

  setActiveTag = this.createSetter('activeTag');
  setSortOption = this.createSetter('sortOption');

  render() {
    const {activeTag, sortOption} = this.state;
    return (
      <Fragment>
        <NavBar 
          activeTag={activeTag} 
          sortOption={sortOption}
          tagOptions={this.state.tags}
          setActiveTag={this.setActiveTag}
          setSortOption={this.setSortOption} />
          <Feed content={this.state.exhibits} />
      </Fragment>
    );
  }
}

export default App;