import React from 'react';
import PropTypes from 'prop-types';

export function MenuView(props) {
  return (
    <nav>
      <a href="#home__view">Home</a>
      <a href="#bio__view">About Me</a>
      <a href="#resume__view">Resume</a>
      <a href="#arcade__view">Arcade</a>
    </nav>
  );
}

MenuView.propTypes = {
  changePage: PropTypes.func,
};
