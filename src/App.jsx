import { sortOptions, defaultTag } from './utils/constants';
import { Feed, Submit, Navigation, Title } from './components';
import { LanguageProvider } from './utils/Language';  
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import { Main, LogoImg, SideContainer, MobileNav } from './style/AppStyle';
import MediaQuery from 'react-responsive';
import { colors } from './style/theme';
import axios from 'axios';

export class App extends Component {
  state = {
    feed: [],
    tags: [],
    filterTag: defaultTag,
    sortOption: sortOptions.RECENT,
    onLastPage: false,
    feedIndex: 0,
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

  setTag = (tag) => {
    this.setState({
      filterTag: tag,
      feedIndex: 0
    })
  }

  setSort = (sortOption) => {
    this.setState({
      sortOption: sortOption,
      feedIndex: 0
    })
  }

  render() {
    const {tags, filterTag, sortOption, feed, feedIndex } = this.state
    return (
    <ThemeProvider theme={colors}>
      <Main>
        <MediaQuery minWidth={768}>
          <SideContainer>
            <LogoImg src="https://www.balboapark.org/sites/default/files/2018-07/CCIM-OrgPageAd-275x350.jpg" />
            <Title/>
          </SideContainer>
          <Switch>
            <Route exact path='/' render={props => (
              <Feed
                setActiveCalls={this.setters.activeCalls}
                setIndex={this.setters.feedIndex}
                setErrors={this.setters.errors}
                setFeed={this.setters.feed}
                feedIndex={feedIndex}
                sortOption={sortOption.value}
                filterTag={filterTag.value}
                feed={feed}
              />
            )} />
            <Route exact path='/submit' component={Submit}/>	
          </Switch>
          <SideContainer>
            <Navigation 
              tags={tags}
              filterTag={filterTag} 
              sortOption={sortOption}
              setTags={this.setters.tags}
              setErrors={this.setters.errors}
              setFilterTag={this.setTag}
              setSortOption={this.setSort}
              setActiveCalls={this.setters.activeCalls}
            />
            <Title flipped />
          </SideContainer>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <MobileNav>
            <Navigation 
              tags={tags}
              direction="row"
              filterTag={filterTag} 
              sortOption={sortOption}
              setTags={this.setters.tags}
              setErrors={this.setters.errors}
              setFilterTag={this.setTag}
              setSortOption={this.setters.sortOption}
              setActiveCalls={this.setters.activeCalls}
            />
          </MobileNav>
        </MediaQuery>
      </Main>
    </ThemeProvider>
    )
  }
}

export default App;