import { NOT_FOUND } from 'redux-first-router'

export default (state = 'HOME', action = {}) => components[action.type] || state

const components = {
  HOME: 'Home',
  LIST: 'List',
  ABOUT: 'About',
  SUBMIT: 'Submit',
  PROFILE: 'Profile',
  DETAILPAGE: 'DetailPage',
  FEED: 'Feed',
  [NOT_FOUND]: 'NotFound'
}

// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router's <Route /> component.
//
// ALSO:  Forget a switch, use a hash table for perf.
