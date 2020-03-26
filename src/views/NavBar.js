import React from 'react';
import PropTypes from 'prop-types'

export function NavBar(props) {
  let { changeApp } = props;
  return (
    <nav className={'arcade__nav'}>
      <button className={'arcade__button'} onClick={() => changeApp('weather')}>
        Weather
      </button>
      <button className={'arcade__button'} onClick={() => changeApp('pokedex')}>
        Pokedex
      </button>
      <button
        className={'arcade__button'}
        onClick={() => changeApp('battleship')}
      >
        Battleship
      </button>
      <button className={'arcade__button'} onClick={() => changeApp('chess')}>
        Chess
      </button>
      <a className={'arcade__button'} href={'#home__view'}>
        This Site!
      </a>
    </nav>
  );
}

NavBar.propTypes = {
  changeApp: PropTypes.func,
}