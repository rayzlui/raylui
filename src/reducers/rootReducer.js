import { combineReducers } from 'redux';
import { changeHomescreenReducer } from './changeHomescreenReducer';

export const rootReducer = combineReducers({
  isHeader: changeHomescreenReducer,
});
