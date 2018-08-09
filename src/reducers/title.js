export default (state = 'RFR Demo', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'RFR Demo'
    case 'ABOUT':
      return 'About'
    case 'ENTRY':
      return 'Entry'
    case 'DETAILPAGE':
      return 'DetailPage'
    case 'FEED':
      return 'Feed'
    default:
      return state
  }
}
