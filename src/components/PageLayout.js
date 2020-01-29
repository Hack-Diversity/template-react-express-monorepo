import React from 'react';
import logo from '../styles/assets/logo.svg';

export const PageLayout = () =>
  <div className="page-layout--header">
    <div className="page-layout--details">
      <h1 className="page-layout--name">Hack.Diversity React/Redux Template</h1>
      <p className="page-layout--description">TBD</p>
    </div>
    <img src={logo} className="app--logo" alt="React Logo" />
  </div>