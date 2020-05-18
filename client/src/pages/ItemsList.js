import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import { DeleteItem, UpdateItem } from '../components/items';
import api from '../api';

import styled from 'styled-components';

import 'react-table-6/react-table.css';

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      columns: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllItems().then(items => {
      this.setState({
        items: items.data.data,
        isLoading: false,
      });
    });
  }

  render() {
    const { items, isLoading } = this.state;
    const columns = [
      {
        Header: 'ID',
        accessor: '_id',
        filterable: true,
      },
      {
        Header: 'Name',
        accessor: 'name',
        filterable: true,
      },
      {
        Header: 'Timeframe',
        accessor: 'timeframe',
        Cell: props => <span>{props.value.join(' / ')}</span>,
      },
      {
        Header: 'Priority',
        accessor: 'priority',
        filterable: true,
      },
      {
        Header: '',
        accessor: '',
        Cell: function(props) {
          return (
            <span>
              <UpdateItem id={props.original._id} />
            </span>
          );
        },
      },
      {
        Header: '',
        accessor: '',
        Cell: function(props) {
          return (
            <span>
              <DeleteItem id={props.original._id} />
            </span>
          );
        },
      },
    ];

    let showTable = true;
    if (!items.length) {
      showTable = false;
    }

    return (
      <Wrapper>
        {showTable ? (
          <ReactTable
            data={items}
            columns={columns}
            isLoading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={10}
          />
        ) : (
          `No items to render... :(`
        )}
      </Wrapper>
    );
  }
}

export default ItemsList;