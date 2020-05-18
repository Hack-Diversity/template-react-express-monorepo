import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';

import styled from 'styled-components';

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

class UpdateItem extends Component {
    confirmUpdateItem = event => {
      event.preventDefault();

      if (
        window.confirm(
          `Are you sure you want to update this item? ${this.props.id}`,
        )
      ) {
        api.updateItemById()
        window.location.href = `/items/update/${this.props.id}`;
      }
    }

    render() {
      return <Update onClick={this.updateUser}>Update Item</Update>;
    }
}

UpdateItem.propTypes = {
    id: PropTypes.string,
};

export default UpdateItem;