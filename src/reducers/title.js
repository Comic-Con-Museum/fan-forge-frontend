export default (state = 'RFR Demo', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'RFR Demo'
    case 'SUBMIT':
      return 'Submit Form'
    case 'DETAIL':
      return 'Detail'
    case 'FEED':
      return 'Feed'
    default:
      return state
  }
}
