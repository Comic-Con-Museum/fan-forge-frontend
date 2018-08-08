export default (state = 'RFR Demo', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'RFR Demo'
    case 'ENTRY':
      return 'Entry'
    default:
      return state
  }
}
