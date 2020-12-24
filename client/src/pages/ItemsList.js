import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table-6';
import { fetchAllItems } from '../actions';
import { DeleteItem, UpdateItem } from '../components/items';

import styled from 'styled-components';

import 'react-table-6/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

class ItemsList extends Component {

    componentDidMount() {
        if (((this.props.itemData || {}).items || []).length) return;

        this.props.fetchAllItems()
    }

    render() {
        const { items, loaded, loading } = this.props.itemData || {};
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
                Cell: props => <span>{props.value}</span>,
            },
            {
                Header: 'Priority',
                accessor: 'priority',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
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
                Cell: function (props) {
                    return (
                        <span>
                            <DeleteItem id={props.original._id} />
                        </span>
                    );
                },
            },
        ];

        return (
            <Wrapper>
                {(
                    (items || []).length > 0
                ) ? (
                        <ReactTable
                            data={items}
                            columns={columns}
                            isLoading={(loaded && loading)}
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

const mapStateToProps = state => {
    return {
      ...state
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchAllItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
