import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { sortOptions, defaultTag } from './utils/constants';
import  {fetchFeed, fetchTags } from './utils/api';
import { LanguageProvider } from './data/Language';
import NavBar from './components/NavBar';
import attachStore from './data/store';
import { theme } from './style/theme';
import Feed from './components/Feed';

export class ClientApp extends Component {
  state = {
    loading: false,
    error: true
  }
  
  async componentDidMount() { 
    const { activeTag, sortOption, currentFeedPage, updateStore } = this.props;

    this.setState({loading: true});

    try {
      const feedFetcher = fetchFeed(currentFeedPage, sortOption.value, activeTag.value);
      const tagFetcher = fetchTags();
      
      const [feed, tags] = [await feedFetcher, await tagFetcher]

      const tagData = [defaultTag].concat(tags.data.map(tag => ({
        label: tag,
        value: tag
      })));

      updateStore({
        tags: tagData,
        exhibits: feed.data.exhibits,
      });

      this.setState({loading: false});
    } catch (error) {
      console.log("not ok:", error);
      this.setState({error: error});
    } 
  }

  shouldUpdateFeed = prevProps => {
    const {sortOption, activeTag, currentPageIndex} = this.props;

    return prevProps.sortOption.value !== sortOption.value
    || prevProps.activeTag.value !== activeTag.value
    || prevProps.currentPageIndex !== currentPageIndex
  }

  updateFeed = async () => {
    const { activeTag, sortOption, currentFeedPage, updateStore } = this.props;

    this.setState({loading: true});

    try {
      const feed =  await fetchFeed(currentFeedPage, sortOption.value, activeTag.value);
  
      this.setState({
        exhibits: feed.data.exhibits,
        loading: false
      });
    } catch(error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.shouldUpdateFeed(prevProps)) {
      this.updateFeed();
    }
  }

  render() {
    const {activeTag, sortOption, tags, exhibits, set} = this.props;
    return (
      <LanguageProvider>
        <NavBar 
          activeTag={activeTag} 
          sortOption={sortOption}
          tagOptions={tags}
          setActiveTag={set.activeTag}
          setSortOption={set.sortOption} />
        <Feed content={exhibits} />
      </LanguageProvider>
    );
  }
}

const ClientAppWithStore = attachStore(ClientApp);
export default ClientAppWithStore;