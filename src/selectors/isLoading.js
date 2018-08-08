import { createSelector } from 'reselect'

export default createSelector(
  [state => state.location.type, state => state.location.payload],
  // (type, { slug, category }, hash1, hash2) => false // if we later need these
  () => false
)
