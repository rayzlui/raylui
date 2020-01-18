import React from 'react';
import { BioView } from './BioView';
import { HomescreenView } from './HomescreenView';
import { ResumeView } from './ResumeView';
import { ArcadeView } from './ArcadeView';
import PropTypes from 'prop-types';
import { MenuContainer } from '../containers/MenuContainer';
import { ContactView } from './ContactView';
import { HeaderView } from './HeaderView';

export function RootView() {
  return (
    <div className="container">
      <HeaderView />
      <BioView />
      <HomescreenView />
      <ResumeView />
      <ArcadeView />
      <ContactView />
      <MenuContainer />
    </div>
  );
}

RootView.propTypes = {
  page: PropTypes.string,
};
