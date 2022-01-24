/* eslint-disable semi */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Welcome = () => (
  <div className="welcome--container">
    <h3 className="welcome--message-text">Welcome to the Template</h3>
    <div className="page-layout--header">
      <div className="page-layout--details">
        <h1 className="page-layout--name">Hack.Diversity MERN Stack Template</h1>
        <p className="page-layout--description">
          A simple CRUD app built using the&nbsp;
          <a
            href="https://www.educative.io/edpresso/what-is-mern-stack"
            target="_blank"
            rel="noopener noreferrer">
            MERN&nbsp;tech-stack
          </a>
          also
          <Link to="/item/61ddf4aebb70255bc9bd096c/update">Here</Link>.
        </p>
      </div>
    </div>
    <Logo />
  </div>
);

export default Welcome;
