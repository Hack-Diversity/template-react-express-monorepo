import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Links from './Links';

const Container = styled.div.attrs({
  className: 'container',
})``;

const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
  margin-bottom: 20px;
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
          <Logo style={logoStyles} />
          <Links />
        </Nav>
      </Container>
    );
  }
}

export default NavBar;