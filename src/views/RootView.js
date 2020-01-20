import React from 'react';
import { BioView } from './BioView';
import { ResumeView } from './ResumeView';
import { ArcadeView } from './ArcadeView';
import PropTypes from 'prop-types';
import {
  HomescreenContainer,
  MenuContainer,
} from '../containers/HomescreenContainer';
import { ContactView } from './ContactView';

export function RootView() {
  return (
    <div className={`container`}>
      <HomescreenContainer />
      <section className={'colorpop'} id={'colorpop1'}></section>
      <BioView />
      <section className={'colorpop'} id={'colorpop2'}></section>
      <ResumeView />
      <section className={'colorpop'} id={'colorpop3'}></section>
      <ArcadeView />
      <section className={'colorpop'} id={'colorpop4'}></section>
      <ContactView />
      <MenuContainer />
    </div>
  );
}

RootView.propTypes = {
  page: PropTypes.string,
};
