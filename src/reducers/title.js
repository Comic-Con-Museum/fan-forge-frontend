export default (state = 'RFR Demo', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'RFR Demo'
    case 'ENTRY':
      return 'Entry'
    case 'FEED':
        return 'Feed'
    default:
      return state
  }
}
