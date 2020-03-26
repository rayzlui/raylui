import React, { useState } from 'react';
import { NavBar } from './NavBar';

const apps = {
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

export function ArcadeView() {
  let [currentApp, changeApp] = useState('weather');
  let viewing = apps[currentApp];
  let frame = <iframe title={viewing[0]} src={viewing[1]}></iframe>;

  return (
    <section id={'arcade__view'}>
      <header>
        <h1>Portfolio</h1>
      </header>
      <NavBar changeApp={changeApp} />
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
