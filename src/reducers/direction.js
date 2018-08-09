export default (state = 'next', action = {}) => {
  if (!action.meta || !action.meta.location) {
    return state
  }

  const { type } = action
  const prevType = action.meta.location.prev.type

  if (type === prevType) {
    return 'state'
  }
  if (type === 'HOME') {
    return 'back'
  } if (type === 'ENTRY' || type === 'SUBMIT' || type === 'HOME' || type === 'FEED' || type === 'USER_LOGGED_IN') {
    return 'next'
  }
  return state
}

// this is an example of some fun stuff you can do easily trigger animations
// from state. Look into <TransitionGroup /> within components/Switcher.js
