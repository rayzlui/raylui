import { shallow } from 'enzyme';
import React from 'react';
import { FunnyIntro } from './FunnyIntro';

describe('FunnyIntro', () => {
  it('should render correctly', () => {
    let mockShow = 'hide';
    let wrapper = shallow(<FunnyIntro showFunny={mockShow} />);
    expect(wrapper.props().className).toEqual(mockShow);
    let spans = wrapper.find('span');
    expect(spans.length).toEqual(3);
    let expectedSpans = [
      'Software Engineer.',
      'Fashionista.',
      'Future Contestant on Top Chef Canada.',
    ];
    spans.forEach((span, index) => {
      expect(span.text()).toEqual(expectedSpans[index]);
    });
    let part4 = wrapper.find('.funny4');
    expect(part4.text()).toEqual('In that order.');
  });
});
