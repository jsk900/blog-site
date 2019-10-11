import { addReducer } from './addReducer';
import { removeReducer } from './removeReducer';
import { redirectReducer } from './redirectReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  addReducer,
  removeReducer,
  redirectReducer
});

export default allReducers;
