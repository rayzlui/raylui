import React from 'react';
import PropTypes from 'prop-types';

export function MenuView(props) {
  const { changeHomescreen } = props;
  return (
    <nav className={'anchor__nav'}>
      <a href="#home__view">Home</a>
      <a href="#bio__view" onClick={() => changeHomescreen(false)}>
        About Me
      </a>
      <a href="#resume__view" onClick={() => changeHomescreen(false)}>
        Resume
      </a>
      <a href="#arcade__view" onClick={() => changeHomescreen(false)}>
        Apps
      </a>
      <a href="#contact__view" onClick={() => changeHomescreen(false)}>
        Contact
      </a>
    </nav>
  );
}

MenuView.propTypes = {
  changeHomescreen: PropTypes.func,
};
