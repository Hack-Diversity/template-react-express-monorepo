import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertSingleItem } from '../actions';


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

    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px auto;
    max-width: 30%;
    text-align: center;

    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
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

class ItemInsert extends Component {
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

    handleInsertItem = event => {
        event.preventDefault();

        const {
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
        const item = { 
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

        this.props.insertSingleItem(item)
            .then(resp => {
                console.log("handleInsertItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Item inserted successfully');
                    this.setState({
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
                    });
                } else {
                    throw resp;
                }
            })
            .catch(err => {
                // TODO: pass error object correctly so that things like validation errors can be displayed to user
                window.alert(`There was an error creating the item... :(`);
                console.log("handleInsertItem: err");
                console.log(err);
            })
    }

    render() {
        const {
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


        return (
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

                <Button onClick={this.handleInsertItem}>Add Item</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ insertSingleItem }, dispatch);

export default connect(null, mapDispatchToProps)(ItemInsert);
