import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Links from './Links';

const Container = styled.div.attrs({
    className: 'container',
})`
    max-width: 100%;
    padding-left: 0px;
    padding-right: 0px;
`;

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20px;
    max-height: 5em;

    @media screen and (min-width: 992px) {
        padding: 0.5em 25%;
    }
`;

const logoStyles = {
    height: '40px',
    width: '40px',
};

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo logoStyles={logoStyles} />
                    <Links />
                </Nav>
            </Container>
        );
    }
}

export default NavBar;
