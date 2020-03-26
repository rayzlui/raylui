import { mount } from 'enzyme';
import React from 'react';
import { ArcadeView } from './ArcadeView';
import { NavBar } from './NavBar';

describe('ArcadeView', () => {
  describe('render correctly', () => {
    describe('initial', () => {
      let wrapper = mount(<ArcadeView />);
      let navBar = wrapper.find(NavBar);
      it('should have header', () => {
        let header = wrapper.find('h1');
        expect(header.text()).toEqual('Portfolio');
      });
      it('should have NavBar', () => {
        expect(navBar.length).toEqual(1);
      });
      it('should have iFrame', () => {
        let frame = wrapper.find('iframe');
        let expectedData = [
          'a fun weather app',
          'https://rayzlui.github.io/weather-app/',
        ];
        let { title, src } = frame.props();
        expect(title).toEqual(expectedData[0]);
        expect(src).toEqual(expectedData[1]);
      });

      it('should have anchor', () => {
        let expectedHref = 'https://github.com/rayzlui/weather-app';
        let anchor = wrapper.find('.arcade__code__anchor');
        expect(anchor.text()).toEqual('See the code');
        let { href, target } = anchor.props();
        expect(href).toEqual(expectedHref);
        expect(target).toEqual('_blank');
      });
    });
    describe('pokedex', () => {
      let wrapper = mount(<ArcadeView />);
      let navBar = wrapper.find(NavBar);
      let button = navBar.find('button');
      it('should have header', () => {
        let header = wrapper.find('h1');
        expect(header.text()).toEqual('Portfolio');
      });
      it('should have NavBar', () => {
        expect(navBar.length).toEqual(1);
      });
      button.at(1).simulate('click');
      it('should have iFrame', () => {
        let frame = wrapper.find('iframe');
        let expectedData = [
          'a pocket monsters directory',
          'https://rayzlui.github.io/pokedex/',
        ];
        let { title, src } = frame.props();
        expect(title).toEqual(expectedData[0]);
        expect(src).toEqual(expectedData[1]);
      });

      it('should have anchor', () => {
        let expectedHref = 'https://github.com/rayzlui/pokedex';
        let anchor = wrapper.find('.arcade__code__anchor');
        expect(anchor.text()).toEqual('See the code');
        let { href, target } = anchor.props();
        expect(href).toEqual(expectedHref);
        expect(target).toEqual('_blank');
      });
    });
    describe('chess', () => {
      let wrapper = mount(<ArcadeView />);
      let navBar = wrapper.find(NavBar);
      let button = navBar.find('button');
      it('should have header', () => {
        let header = wrapper.find('h1');
        expect(header.text()).toEqual('Portfolio');
      });
      it('should have NavBar', () => {
        expect(navBar.length).toEqual(1);
      });
      button.at(3).simulate('click');
      it('should have iFrame', () => {
        let frame = wrapper.find('iframe');
        let expectedData = ['chess game', 'https://rayzlui.github.io/chess/'];
        let { title, src } = frame.props();
        expect(title).toEqual(expectedData[0]);
        expect(src).toEqual(expectedData[1]);
      });

      it('should have anchor', () => {
        let expectedHref = 'https://github.com/rayzlui/chess';
        let anchor = wrapper.find('.arcade__code__anchor');
        expect(anchor.text()).toEqual('See the code');
        let { href, target } = anchor.props();
        expect(href).toEqual(expectedHref);
        expect(target).toEqual('_blank');
      });
    });
    describe('battleship', () => {
      let wrapper = mount(<ArcadeView />);
      let navBar = wrapper.find(NavBar);
      let button = navBar.find('button');
      it('should have header', () => {
        let header = wrapper.find('h1');
        expect(header.text()).toEqual('Portfolio');
      });
      it('should have NavBar', () => {
        expect(navBar.length).toEqual(1);
      });
      button.at(2).simulate('click');
      it('should have iFrame', () => {
        let frame = wrapper.find('iframe');
        let expectedData = [
          'battleship game',
          'https://rayzlui.github.io/battleship/',
        ];
        let { title, src } = frame.props();
        expect(title).toEqual(expectedData[0]);
        expect(src).toEqual(expectedData[1]);
      });

      it('should have anchor', () => {
        let expectedHref = 'https://github.com/rayzlui/battleship';
        let anchor = wrapper.find('.arcade__code__anchor');
        expect(anchor.text()).toEqual('See the code');
        let { href, target } = anchor.props();
        expect(href).toEqual(expectedHref);
        expect(target).toEqual('_blank');
      });
    });
  });
});
