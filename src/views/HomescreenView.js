import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FunnyIntro } from './FunnyIntro';

export function HomescreenView(props) {
  let { isHeader, changeHomescreen } = props;

  function handleScroll(e) {
    if (e.target.defaultView) {
      if (e.target.defaultView.scrollY < 200) {
        changeHomescreen(true);
      } else {
        changeHomescreen(false);
      }
    }
  }

  let [opening, changeOpening] = useState('');
  let [textColor, changeText] = useState('unfade');
  let [showFunny, changeFunny] = useState('hide__funny');
  setTimeout(() => {
    changeOpening('fade');
  }, 800);
  setTimeout(() => {
    changeText('');
    changeFunny('show__funny');
  }, 1700);

  let isTopBar = isHeader
    ? ['intro', 'my__name__intro']
    : ['topbar', 'my__name__header'];
  document.addEventListener('scroll', handleScroll, true);
  return (
    <section className={`home__view`} id={'home__view'}>
      <img
        className={`fireworks ${opening}`}
        src={'https://media.giphy.com/media/nbJUuYFI6s0w0/giphy.gif'}
        alt={'fireworks!!'}
      />
      <header className={`${isTopBar[0]}`}>
        <h1 className={`intro__text ${isTopBar[1]}`} id={`${textColor}`}>
          Raymond Lui
        </h1>
      </header>
      <FunnyIntro showFunny={showFunny} />
    </section>
  );
}

HomescreenView.propTypes = {
  isHeader: PropTypes.bool,
  changeHomescreen: PropTypes.func,
};
