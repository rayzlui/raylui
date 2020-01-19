import React from 'react';
import PropTypes from 'prop-types';

export function HomescreenView(props) {
  let { isHeader, changeHomescreen } = props;

  function handleScroll(e) {
    if (e.target.defaultView.scrollY < 200) {
      changeHomescreen(true);
    } else {
      changeHomescreen(false);
    }
  }

  let isTopBar = isHeader
    ? ['intro', 'my__name__intro']
    : ['topbar', 'my__name__header'];
  document.addEventListener('scroll', handleScroll, true);
  return (
    <section className={'home__view'} id={'home__view'}>
      <header className={`${isTopBar[0]}`}>
        <h1 className={`${isTopBar[1]}`}>Raymond Lui</h1>
      </header>
    </section>
  );
}

HomescreenView.propTypes = {
  isHeader: PropTypes.bool,
  changeHomescreen: PropTypes.func,
};
