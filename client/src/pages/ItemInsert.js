import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertSingleItem } from '../actions';
import { shared } from '../constants';

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

const Fieldset = styled.fieldset.attrs({
    className: 'form-control',
})`
    background-color: transparent;
    border-color: transparent;
    margin: 1em auto 0.5em;
    max-width: 50%;
    min-height: 6em;

    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
`;

const DayInput = styled.input.attrs({
    className: '',
})`
    margin: 5px 5px 5px auto;
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
            name: '',
            daysOfWeek: {},
            timeframeNote: '',
            priority: 0,
            content: '',
        };
    }

    handleChangeInputName = async event => {
        const name = event.target.value;
        this.setState({ name });
    }

    handleChangeDays = async event => {
        const { checked, value } = event.target;
        const { daysOfWeek } = this.state;
        const { DAYS_OF_WEEK } = shared;

        if (checked && !daysOfWeek[value]) {
            daysOfWeek[value] = DAYS_OF_WEEK[value];
        } else if (!checked && daysOfWeek[value]) {
            delete daysOfWeek[value];
        }
        this.setState({ daysOfWeek });
    }

    handleChangeInputTimeframe = async event => {
        const timeframeNote = event.target.value;
        this.setState({ timeframeNote });
    }

    handleChangeInputPriority = async event => {
        const priority = event.target.validity.valid
            ? event.target.value
            : this.state.priority;

        this.setState({ priority });
    }

    handleChangeInputContent = async event => {
        const content = event.target.value;
        this.setState({ content });
    }

    handleInsertItem = event => {
        event.preventDefault();

        const {
            name,
            daysOfWeek,
            timeframeNote,
            priority,
            content
        } = this.state;
        const item = { name, daysOfWeek, timeframeNote, priority, content };

        this.props.insertSingleItem(item)
            .then(resp => {
                console.log("handleInsertItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Item inserted successfully');
                    this.setState({
                        name: '',
                        daysOfWeek: {},
                        timeframeNote: '',
                        priority: 0,
                        content: '',
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
            name,
            daysOfWeek,
            timeframeNote,
            priority,
            content
        } = this.state;

        const { DAYS_OF_WEEK } = shared;

        return (
            <Wrapper>
                <Title>Create Item</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Fieldset>
                    <legend>Day(s) of the Week: </legend>
                    {Object.keys(DAYS_OF_WEEK).map((day, i) => (
                        <React.Fragment
                            key={day}
                        >
                            <Label
                                htmlFor={day}
                            >
                                <DayInput
                                    type="checkbox"
                                    id={day}
                                    value={day}
                                    onChange={this.handleChangeDays}
                                    checked={typeof daysOfWeek[day] === "string"}
                                />
                                { DAYS_OF_WEEK[day] }
                            </Label>
                        </React.Fragment>
                    ))}
                </Fieldset>

                <Label>Timeframe Note: </Label>
                <InputText
                    type="text"
                    value={timeframeNote}
                    onChange={this.handleChangeInputTimeframe}
                />

                <Label>Priority: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="1000"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={priority}
                    onChange={this.handleChangeInputPriority}
                />

                <Label>Content: </Label>
                <InputText
                    type="textarea"
                    value={content}
                    onChange={this.handleChangeInputContent}
                />

                <Button onClick={this.handleInsertItem}>Add Item</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ insertSingleItem }, dispatch);

export default connect(null, mapDispatchToProps)(ItemInsert);
