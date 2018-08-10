import { POST_EXHIBIT_SUCCESS, REMOVE_SUBMIT_ID } from '../actions'

export default (state = '', action = {}) => {
  switch (action.type) {
    case POST_EXHIBIT_SUCCESS:
      return action.payload
    case REMOVE_SUBMIT_ID:
      return ''
    default:
      return state
  }
}
