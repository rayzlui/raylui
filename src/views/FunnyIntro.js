import React from 'react';
import PropTypes from 'prop-types'

export function FunnyIntro(props) {
  const { showFunny } = props;
  return (
    <section className={`${showFunny}`}>
      <p className={`funny__intro`}>
        <span className={`funny1`}>Software Engineer.</span>
        <span className={`funny2`}>Fashionista.</span>
        <span className={`funny3`}>Future Contestant on Top Chef Canada.</span>
      </p>
      <p className={`funny__intro funny4`}>In that order.</p>
    </section>
  );
}

FunnyIntro.propTypes = {
  showFunny: PropTypes.string,
}