import { shallow } from 'enzyme';
import React from 'react';
import { BioView } from './BioView';

describe('BioView', () => {
  let wrapper = shallow(<BioView />);
  it('should have header', () => {
    let header = wrapper.find('h1');
    expect(header.text()).toEqual('About Me');
  });
  it('should have image', () => {
    let img = wrapper.find('img');
    let { src, alt } = img.props();
    expect(src).toEqual(
      'https://avatars0.githubusercontent.com/u/49495265?s=460&v=4',
    );
    expect(alt).toEqual('ITS ME!');
  });
  describe('should have article', () => {
    let article = wrapper.find('article');
    it('should have sections', () => {
      let sec = article.find('p');
      expect(sec.length).toEqual(4);
    });
  });
});
