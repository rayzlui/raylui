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
      <header><h1>Portfolio</h1></header>
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
        <a className={'arcade__button'} href={'#home__view'}>
          This Site!
        </a>
      </nav>
      {frame}
    </section>
  );
}
