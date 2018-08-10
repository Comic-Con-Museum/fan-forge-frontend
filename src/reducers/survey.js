import { POST_SURVEY, POST_SURVEY_FAIL, POST_SURVEY_SUCCESS, REMOVE_SUBMIT_ID } from '../actions'

export default (state = 'working', action = {}) => {
  switch (action.type) {
    case POST_SURVEY:
      return 'loading'
    case POST_SURVEY_FAIL:
      return 'failed'
    case POST_SURVEY_SUCCESS:
      return 'success'
    case REMOVE_SUBMIT_ID:
      return 'working'
    default:
      return state
  }
}
