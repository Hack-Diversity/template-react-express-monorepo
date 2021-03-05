/* eslint-disable semi */
import React from 'react';
import Logo from './Logo';

const PageLayout = () =>
    <div className="page-layout--header">
        <div className="page-layout--details">
            <h1 className="page-layout--name">Hack.Diversity React/Redux Template</h1>
            <p className="page-layout--description">
                A simple CRUD app built using the&nbsp;
                <a href="https://www.educative.io/edpresso/what-is-mern-stack" target="_blank" rel="noopener noreferrer">MERN&nbsp;tech-stack</a>.
            </p>
        </div>
        <Logo />
    </div>

export default PageLayout;
