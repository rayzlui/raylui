import { changeHomescreen } from './actions';
import { CHANGE_HEADER } from './actionsTypes';

describe('changeHomeScreen', () => {
  it('should return obj', () => {
    let mockHeader = 'mockHeader';
    let wrapper = changeHomescreen(mockHeader);
    expect(wrapper.type).toEqual(CHANGE_HEADER);
    expect(wrapper.isHeader).toEqual(mockHeader);
  });
});
