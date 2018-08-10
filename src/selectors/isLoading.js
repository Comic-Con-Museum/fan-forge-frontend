import {createSelector} from 'reselect'

export default createSelector(
  [state => state.location.type, state => state.location.payload],
  () => false
)
