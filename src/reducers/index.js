import { combineReducers } from 'redux';

import mainnavreducers from './mainnavreducers';

const rootReducer = combineReducers({
  nav:mainnavreducers
});

export default rootReducer;
