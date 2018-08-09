import { POST_EXHIBIT, POST_EXHIBIT_FAIL, POST_EXHIBIT_SUCCESS } from '../actions'

export default (state = 'working', action = {}) => {
    switch (action.type) {
        case POST_EXHIBIT:
            return 'loading'
        case POST_EXHIBIT_FAIL:
            return 'failed'
        case POST_EXHIBIT_SUCCESS:
            return 'success'
        default:
            return state
    }
}
