import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table-6';
import * as actions from '../actions';
import { DeleteButton } from '../components/buttons';

import styled from 'styled-components';

import 'react-table-6/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

class ItemsList extends Component {

    componentDidMount() {
        console.log("ItemsList: props");
        console.log(this.props);
        // if (((this.props.itemData || {}).items || []).length) return;

        this.props.fetchAllItems()
    }

    handleRemoveItem = data => {
        const itemId = data;

        this.props.deleteSingleItem(itemId)
            .then(resp => {
                console.log("handleRemoveItem: resp");
                console.log(resp);
                this.props.fetchAllItems();
            });
    }

    render() {
        const {
            items,
            loaded,
            loading
        } = this.props.itemData || {};
        console.log(items);

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-item-id={props.original._id}>
                            {props.original._id}
                        </span>
                    )
                }
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.original.name}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'Day(s)',
                accessor: 'daysOfWeek',
                filterable: true,
                Cell: props => {
                    const { daysOfWeek } = props.original;
                    let daysToDisplay = "";
                    if (daysOfWeek && typeof daysOfWeek === "object") {
                        for (const day in daysOfWeek) {
                            daysToDisplay = daysToDisplay === "" ? daysOfWeek[day] : `${daysToDisplay}, ${daysOfWeek[day]}`;
                        }

                    }
                    return (
                        <span
                            data-daysofweek={daysOfWeek && JSON.stringify(daysOfWeek)}
                            data-daysofweek-by-id={props.original._id}
                        >
                            {daysToDisplay || "-"}
                        </span>
                    );
                }
            },
            {
                Header: 'Timeframe',
                accessor: 'timeframeNote',
                Cell: props => {
                    return (
                        <span data-timeframe={props.original.timeframeNote}>
                            {props.value || "-"}
                        </span>
                    );
                },
            },
            {
                Header: 'Priority',
                accessor: 'priority',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-priority={props.original.priority}>
                            {props.value}
                        </span>
                    );
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: props => {
                    return (
                        <Link
                            data-update-id={props.original._id}
                            to={`/item/update/${props.original._id}`}
                        >
                            Update Item
                        </Link>
                    );
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: props => {
                    return (
                        <span data-delete-id={props.original._id}>
                            <DeleteButton
                                id={props.original._id}
                                onDelete={this.handleRemoveItem}
                            />
                        </span>
                    );
                },
            },
        ];

        return (
            <Wrapper>
                {(
                    (items || []).length > 0 // defeats the purpose of using `isLoading` prop?
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

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
