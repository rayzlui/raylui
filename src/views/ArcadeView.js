import React, { useState } from 'react';

export function ArcadeView() {
  let [currentApp, changeApp] = useState('weather');

  let apps = {
    weather: ['a fun weather app', 'https://rayzlui.github.io/weather-app/'],
    pokedex: [
      'a pocket monsters directory',
      'https://rayzlui.github.io/pokedex/',
    ],
  };
  let viewing = apps[currentApp];
  let frame = <iframe title={viewing[0]} src={viewing[1]}></iframe>;

  return (
    <section id={'arcade__view'}>
      <h1>Apps I Have Built</h1>
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
      </nav>
      {frame}
    </section>
  );
}
