import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';

import styled from 'styled-components';

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

class DeleteItem extends Component {
    confirmDeleteItem = event => {
      event.preventDefault();

      if (
        window.confirm(
          `Do you want to permanently delete this item? ${this.props.id}`,
        )
      ) {
        api.deleteItemById(this.props.id);
        window.location.reload();
      }

    }

    render() {
      return <Delete onClick={this.confirmDeleteItem}>Delete Item</Delete>;
    }
}

DeleteItem.propTypes = {
    id: PropTypes.string,
};

export default DeleteItem;
