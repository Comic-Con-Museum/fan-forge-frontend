import React, { PureComponent, Fragment } from 'react';
import { sortOptions, defaultTag } from '../utils/constants';

const defaultState = {
  tags: [],
  exhibits: [],
  loading: false,
  error: undefined,
  currentFeedPage: 0,
  onLastPage: false,
  activeTag: defaultTag,
  sortOption: sortOptions.RECENT
};

const attachStore = (Component, storeDefaultState = defaultState) => 
  class _Store extends PureComponent {
      state = storeDefaultState;

      setStore = Object.keys(defaultState).reduce ((acc, key) => {
        acc[key] = newValue => this.setState({[key]: newValue });
        return acc;
      }, {})

      updateStore = (fieldsToUpdate) => { 
        this.setState(fieldsToUpdate);
      }

      render = () => <Component updateStore={this.updateStore} set={this.setStore} {...this.state} />
    }

export default attachStore;