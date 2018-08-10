import { POST_EXHIBIT, POST_EXHIBIT_FAIL, POST_EXHIBIT_SUCCESS, REMOVE_SUBMIT_ID } from '../actions'

export default (state = 'working', action = {}) => {
  switch (action.type) {
    case POST_EXHIBIT:
      return 'loading'
    case POST_EXHIBIT_FAIL:
      return 'failed'
    case POST_EXHIBIT_SUCCESS:
      return 'success'
    case REMOVE_SUBMIT_ID:
      return 'working'
    default:
      return state
  }
}
