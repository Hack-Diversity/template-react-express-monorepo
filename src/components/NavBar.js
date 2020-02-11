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
`;

const linkStyles = {
  marginLeft: '25vw',
};

const logoStyles = {
  height: '40px',
  width: '40px',
};

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Logo linkStyles={linkStyles} logoStyles={logoStyles} />
          <Links />
        </Nav>
      </Container>
    );
  }
}

export default NavBar;