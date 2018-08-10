import {NOT_FOUND} from 'redux-first-router'

export default (state = 'HOME', action = {}) => components[action.type] || state

const components = {
  HOME: 'Home',
  LIST: 'List',
  SUBMIT: 'Submit',
  ABOUT: 'About',
  ENTRY: 'Entry',
  PROFILE: 'Profile',
  DETAIL: 'Detail',
  FEED: 'Feed',
  [NOT_FOUND]: 'NotFound'
}

// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router's <Route /> component.
//
// ALSO:  Forget a switch, use a hash table for perf.
