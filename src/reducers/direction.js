export default (state = 'next', action = {}) => {
  if (!action.meta || !action.meta.location) {
    return state
  }

  const { type } = action
  const prevType = action.meta.location.prev.type

  const list = ["HOME", "FEED", "ABOUT", "ENTRY", "DETAILPAGE"];
  const lastIndex = list.indexOf(prevType);
  const newIndex = list.indexOf(type);
  if (type === prevType) {
    return 'state'
  } else {
    if (newIndex > lastIndex) {
      return 'next'
    } else {
      return 'back'
    }
  }
}

// this is an example of some fun stuff you can do easily trigger animations
// from state. Look into <TransitionGroup /> within components/Switcher.js
