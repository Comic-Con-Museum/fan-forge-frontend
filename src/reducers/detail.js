export default (state = null, action = {}) => {
    switch(action.type) {
        case 'DETAIL':
            return action.payload.id
        default:
            return state
    }
}