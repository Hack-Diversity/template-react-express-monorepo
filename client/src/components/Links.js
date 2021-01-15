import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
    // className: 'collapse navbar-collapse',
})`
    @media screen and (max-width: 420px) {
        display: flex;
        flex-grow: 1;
    }
`;

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`
    @media screen and (max-width: 420px) {
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
    }
`;

const Item = styled.div.attrs({
    // className: 'collapse navbar-collapse',
})`
    @media screen and (max-width: 420px) {

    }
`;

const homeStyles = {
    marginLeft: `1em`
}

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link
                    to="/"
                    className="navbar-brand"
                    style={homeStyles}
                >
                    Home
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link
                                to="/items"
                                className="nav-link"
                            >
                                Items
                            </Link>
                        </Item>
                        <Item>
                            <Link
                                to="/item/create"
                                className="nav-link"
                            >
                                Create Item
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        );
    }
}

export default Links;
