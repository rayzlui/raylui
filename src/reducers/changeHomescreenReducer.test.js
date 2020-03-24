import { CHANGE_HEADER } from '../actions/actionsTypes';
import { changeHomescreenReducer } from './changeHomescreenReducer';

describe('changeHomescreenReducer', () => {
  describe('CHANGE_HEADER action type', () => {
    it('should return action.isHeader', () => {
      let mockState = false;
      let mockAction = { type: CHANGE_HEADER, isHeader: true };
      let wrapper = changeHomescreenReducer(mockState, mockAction);
      expect(wrapper).toEqual(mockAction.isHeader);
    });
  });
  describe('other action', () => {
    it('should return state', () => {
      let mockState = true;
      let mockAction = { type: 'anything' };
      let wrapper = changeHomescreenReducer(mockState, mockAction);
      expect(wrapper).toEqual(mockState);
    });
  });
});
