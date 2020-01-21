import React, { useState } from 'react';

export function ArcadeView() {
  let [currentApp, changeApp] = useState('weather');

  let apps = {
    weather: [
      'a fun weather app',
      'https://rayzlui.github.io/weather-app/',
      'https://github.com/rayzlui/weather-app',
    ],
    pokedex: [
      'a pocket monsters directory',
      'https://rayzlui.github.io/pokedex/',
      'https://github.com/rayzlui/pokedex',
    ],
    battleship: [
      'battleship game',
      'https://rayzlui.github.io/battleship/',
      'https://github.com/rayzlui/battleship',
    ],
    chess: [
      'chess game',
      'https://rayzlui.github.io/chess/',
      'https://github.com/rayzlui/chess',
    ],
  };
  let viewing = apps[currentApp];
  let frame = <iframe title={viewing[0]} src={viewing[1]}></iframe>;

  return (
    <section id={'arcade__view'}>
      <header>
        <h1>Portfolio</h1>
      </header>
      <nav className={'arcade__nav'}>
        <button
          className={'arcade__button'}
          onClick={() => changeApp('weather')}
        >
          Weather
        </button>
        <button
          className={'arcade__button'}
          onClick={() => changeApp('pokedex')}
        >
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
      {frame}
      <a
        className={'arcade__code__anchor'}
        href={viewing[2]}
        target="_blank"
        rel="noopener noreferrer"
      >
        See the code
      </a>
    </section>
  );
}
