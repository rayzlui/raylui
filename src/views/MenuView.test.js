import { shallow } from 'enzyme';
import React from 'react';
import { MenuView } from './MenuView';

describe('MenuView', () => {
  it('should render correctly', () => {
    let mockChangeScreen = jest.fn();
    let wrapper = shallow(<MenuView changeHomescreen={mockChangeScreen} />);
    expect(wrapper.props().className).toEqual('anchor__nav');
    let anchors = wrapper.find('a');
    let expectedRefs = [
      '#home__view',
      '#bio__view',
      '#resume__view',
      '#arcade__view',
      '#contact__view',
    ];
    anchors.forEach((anc, index) => {
      let { href } = anc.props();
      expect(href).toEqual(expectedRefs[index]);
      anc.simulate('click');
    });
    expect(mockChangeScreen).toHaveBeenCalledTimes(4);
    expect(mockChangeScreen).toHaveBeenCalledWith(false);
  });
});
