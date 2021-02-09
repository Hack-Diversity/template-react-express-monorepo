import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleItem, updateSingleItem } from '../actions';


import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1',
})``;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-top: 0 30px;
`;

const Label = styled.label`
    margin: 5px;
    max-width: 30%;
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px auto;
    max-width: 30%;
    text-align: center;
`;

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
  margin: 15px 15px 15px 5px;
`;

class ItemUpdate extends Component {
    constructor(props) {
        /**
         * Currently deprecated and now known as the "legacy context":
         * - https://reactjs.org/docs/legacy-context.html
         *
         * TODO: refactor to use new Context API:
         * - https://reactjs.org/docs/context.html
         */
        super(props);
        this.state = {
            _id: '',
            isbn: '',
            title: '',
            author: '',
            publication_year: 0,
            publisher:'',
            image_url_s: '',
            image_url_m: '',
            image_url_l: '',
            copies: 0,
            available: 0,
        };
    }

    componentDidMount() {
        this.props.fetchSingleItem(this.props.itemId)
            .then(resp => {
                const { item } = resp.data;
                this.setState({ ...item });
            });
    }

    handleChangeInputIsbn = async event => {
        const isbn = event.target.value;
        this.setState({ isbn });
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value;
        this.setState({ title });
    }

    handleChangeInputPublisher = async event => {
        const publisher = event.target.value;
        this.setState({ publisher });
    }
    
    handleChangeInputAuthor = async event => {
        const author = event.target.value;
        this.setState({ author });
    }

    handleChangeInputUrlS = async event => {
        const image_url_s = event.target.value;
        this.setState({ image_url_s });
    }

    handleChangeInputUrlM = async event => {
        const image_url_m = event.target.value;
        this.setState({ image_url_m });
    }

    handleChangeInputUrlL = async event => {
        const image_url_l = event.target.value;
        this.setState({ image_url_l });
    }

    handleChangeInputPublicationYear = async event => {
        const publication_year = event.target.validity.valid
            ? event.target.value
            : this.state.priority;

        this.setState({ publication_year });
    }

    handleChangeInputCopies = async event => {
        const copies = event.target.validity.valid
            ? event.target.value
            : this.state.priority;

        this.setState({ copies });
    }

    handleChangeInputAvailable = async event => {
        const available = event.target.validity.valid
            ? event.target.value
            : this.state.priority;

        this.setState({ available });
    }

    handleUpdateItem = event => {
        const {
            _id,
            isbn,
            title,
            author,
            publication_year,
            publisher,
            image_url_s,
            image_url_m,
            image_url_l,
            copies,
            available,
        } = this.state;
        const item = { _id,
            isbn,
            title,
            author,
            publication_year,
            publisher,
            image_url_s,
            image_url_m,
            image_url_l,
            copies,
            available };

        return this.props.updateSingleItem(item)
            .then(resp => {
                console.log("handleUpdateItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Item updated successfully');
                    return true;
                } else {
                    throw resp;
                }
            })
            .catch(err => {
                window.alert(`There was an error updating the item... :(`);
                console.error("handleUpdateItem: err");
                console.error(err);
            });
    }

    confirmUpdateItem = event => {
        if (window.confirm(`Are you sure you want to update this item? ${this.state._id}`)) {
            return this.handleUpdateItem(event);
        }
    }

    render() {
        const {
            _id,
            isbn,
            title,
            author,
            publication_year,
            publisher,
            image_url_s,
            image_url_m,
            image_url_l,
            copies,
            available
        } = this.state;

        return _id && (
            <Wrapper>
                <Title>Add Book</Title>

                <Label>Isbn: </Label>
                <InputText
                    type="text"
                    value={isbn}
                    onChange={this.handleChangeInputIsbn}
                />
                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />
                <Label>Author: </Label>
                <InputText
                    type="text"
                    value={author}
                    onChange={this.handleChangeInputAuthor}
                />

                <Label>Publication Year: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="3000"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={publication_year}
                    onChange={this.handleChangeInputPublicationYear}
                />
                <Label>Publisher: </Label>
                <InputText
                    type="text"
                    value={publisher}
                    onChange={this.handleChangeInputPublisher}
                />
                <Label>Url S: </Label>
                <InputText
                    type="text"
                    value={image_url_s}
                    onChange={this.handleChangeInputUrlS}
                />
                <Label>Url M: </Label>
                <InputText
                    type="text"
                    value={image_url_m}
                    onChange={this.handleChangeInputUrlM}
                />
                <Label>Url L: </Label>
                <InputText
                    type="text"
                    value={image_url_l}
                    onChange={this.handleChangeInputUrlL}
                />
                

                <Label>Copies </Label>
                <InputText
                    type="text"
                    value={copies}
                    onChange={this.handleChangeInputCopies}
                />

                <Label>Available </Label>
                <InputText
                    type="text"
                    value={available}
                    onChange={this.handleChangeInputAvailable}
                />

                <Button onClick={this.confirmUpdateItem}>Update Item</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        itemId: ownProps.match.params.id,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSingleItem, updateSingleItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemUpdate);
