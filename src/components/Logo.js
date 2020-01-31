import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../styles/assets/logo.svg';

const Wrapper = styled.a.attrs({
  className: 'navbar-brand',
});

class Logo extends Component {
  render() {
    return (
      <Wrapper href="#">
        <img src={logo} className="app--logo" alt="React Logo" />
      </Wrapper>
    );
  }
}

export default Logo;