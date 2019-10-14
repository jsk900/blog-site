//Combine reducers

import { addReducer } from './addReducer';
import { redirectReducer } from './redirectReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  addReducer,
  redirectReducer
});

export default allReducers;
