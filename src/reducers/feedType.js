export default (state = null, action = {}) => {
    switch(action.type) {
        case 'FEED':
            return action.payload.type
        default:
            return state
    }
}