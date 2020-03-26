import { shallow } from 'enzyme';
import React from 'react';
import { NavBar } from './NavBar';

describe('NavBar', () => {
  let mockChangeApp = jest.fn();
  let wrapper = shallow(<NavBar changeApp={mockChangeApp} />);
  it('should render correctly', () => {
    let buttons = wrapper.find('button');
    expect(buttons.length).toEqual(4);
    let expectedCalls = ['Weather', 'Pokedex', 'Battleship', 'Chess'];
    buttons.forEach((but, index) => {
      expect(but.text()).toEqual(expectedCalls[index]);
      but.simulate('click');
      expect(mockChangeApp).toHaveBeenCalledWith(
        expectedCalls[index].toLowerCase(),
      );
    });
    let anchor = wrapper.find('a');
    expect(anchor.text()).toEqual('This Site!');
    expect(anchor.length).toEqual(1);
    expect(anchor.props().href).toEqual('#home__view');
  });
});
