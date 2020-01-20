import 'redux';
import { CHANGE_HEADER } from '../actions/actionsTypes';

export function changeHomescreenReducer(state = true, action) {
  switch (action.type) {
    case CHANGE_HEADER:
      return action.isHeader;
    default:
      return state;
  }
}
