import {LOCALE_SWITCH} from '../actions'

export default (state = 'en', action = {}) => {
  switch (action.type) {
    case LOCALE_SWITCH:
      return action.payload
    default:
      return state
  }
}
