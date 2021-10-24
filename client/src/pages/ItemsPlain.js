import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { DeleteButton } from '../components/buttons';

import styled from 'styled-components';

const generateRandomImageWidth = () => {
    // between 40-69, with default of 42
    const randomNumberAsString = (Math.random().toString().match(/[4-6]\d/) || ['42']);
    return parseInt(randomNumberAsString) * 10;
};

const generateRandomImageHeight = () => {
    // between 30-59, with default of 36
    const randomNumberAsString = (Math.random().toString().match(/[3-5]\d/) || ['36']);
    return parseInt(randomNumberAsString) * 10;
};

const generateRandomCat = () => `https://placekitten.com/${generateRandomImageWidth()}/${generateRandomImageHeight()}`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 40px 40px 40px;

    @media screen and (max-width: 420px) {
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
`;

const ItemContainer = styled.div`
    align-items: flex-start;
    border: 2px #899499 solid;
    border-radius: 5%;
    display: inline-flex;
    flex-direction: column;
    margin: 1em 2.5% 2em;
    max-width: 20%;
    padding: 1em;
    text-align: left;
    width: 25vw;
`;

const ItemImage = styled.img`
    margin: auto;
    max-height: 22em;
    object-fit: contain;
    max-width: 80%
`;

const NameHeader = styled.h1`
    font-size: 2rem;
    width: 100%;
`;

const DetailParagraph = styled.p`
    width: 100%;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;

class ItemsPlain extends Component {

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

        return (
            <Wrapper>
                {(
                    (items || []).length > 0
                ) ? (
                    items.map((item) =>
                        <ItemContainer key={item._id}>
                            <ItemImage src={generateRandomCat()}></ItemImage>
                            <NameHeader>{item.name}</NameHeader>
                            <DetailParagraph>ID: {item._id}</DetailParagraph>
                            <DetailParagraph>Priority: {item.priority}</DetailParagraph>
                            <ButtonsWrapper>
                                <Link
                                    data-update-id={item._id}
                                    to={`/item/update/${item._id}`}
                                >
                                    Update Item
                                </Link>
                                <DeleteButton
                                    id={item._id}
                                    onDelete={this.handleRemoveItem}
                                />
                            </ButtonsWrapper>
                        </ItemContainer>
                    )
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPlain);
