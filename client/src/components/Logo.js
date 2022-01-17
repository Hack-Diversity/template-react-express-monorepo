import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../styles/assets/logo.svg';

const Wrapper = styled.a.attrs({
  className: 'navbar-brand',
  href: '/',
})``;

class Logo extends Component {
  render() {
    const { logoStyles } = this.props;

    return (
      <Wrapper>
        <img src={logo} className="app--logo" style={logoStyles} alt="React Logo" />
      </Wrapper>
    );
  }
}

Logo.propTypes = {
  linkStyles: PropTypes.object,
  logoStyles: PropTypes.object,
};

export default Logo;
