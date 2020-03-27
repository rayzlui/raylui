import React from 'react';
import { shallow } from 'enzyme';
import { HomescreenView } from './HomescreenView';
import { FunnyIntro } from './FunnyIntro';

describe('HomescreenView', () => {
  it('should render correctly', () => {
    let wrapper = shallow(<HomescreenView />);
    let funny = wrapper.find(FunnyIntro);
    expect(funny.length).not.toEqual(0);
    let img = wrapper.find('img');
    expect(img.props().src).toEqual(
      'https://media.giphy.com/media/nbJUuYFI6s0w0/giphy.gif',
    );
    let header = wrapper.find('header');
    expect(header.text()).toEqual('Raymond Lui');
  });
});
