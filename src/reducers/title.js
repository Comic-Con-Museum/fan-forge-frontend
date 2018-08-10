export default (state = 'RFR Demo', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'Home'
    case 'SUBMIT':
      return 'Submit Form'
    case 'DETAIL':
      return 'Details'
    case 'ABOUT':
      return 'About'
    case 'ENTRY':
      return 'Entry'
    case 'FEED':
      return 'Feed'
    default:
      return state
  }
}
