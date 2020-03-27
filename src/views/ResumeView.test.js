import { shallow } from 'enzyme';
import React from 'react';
import { ResumeView } from './ResumeView';

describe('ResumeView', () => {
  it('should render correctly', () => {
    let wrapper = shallow(<ResumeView />);
    let article = wrapper.find('article');
    expect(article.length).not.toEqual(0);
  });
});
