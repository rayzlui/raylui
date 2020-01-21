import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
      <section className={`${showFunny}`}>
        <p className={`funny__intro`}>
          <span className={`funny1`}>Software Engineer</span>
          <span className={`funny2`}>Fashionista</span>
          <span className={`funny3`}>Future Contestant on Top Chef</span>
        </p>
        <p className={`funny__intro funny4`}>In that order.</p>
      </section>
    </section>
  );
}

HomescreenView.propTypes = {
  isHeader: PropTypes.bool,
  changeHomescreen: PropTypes.func,
};
