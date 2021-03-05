import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Delete = styled.div.attrs({
    className: "delete-item-btn"
})`
  color: #ff0000;
  cursor: pointer;
`;

class DeleteButton extends Component {
    confirmDeleteItem = event => {
        event.preventDefault();

        if (
            window.confirm(
                `Do you want to permanently delete this item? ${this.props.id}`,
            )
        ) {
            this.props.onDelete(this.props.id);
        }

    }

    render() {
        return <Delete onClick={this.confirmDeleteItem}>Delete Item</Delete>;
    }
}

DeleteButton.propTypes = {
    id: PropTypes.string,
};

export default DeleteButton;
