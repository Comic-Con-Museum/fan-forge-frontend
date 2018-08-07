// src/js/reducers/index.js

import { combineReducers } from 'redux';
import SampleReducer from './reducer_sample';

const rootReducer = combineReducers({
  sample: SampleReducer
});

export default rootReducer;
