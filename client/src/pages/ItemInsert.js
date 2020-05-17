import React, { Component } from 'react';
import api from '../api';

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

class ItemInsert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      timeframe: '',
      priority: 0,
      content: '',
    };
  }

  handleChangeInputName = async event => {
    const name = event.target.value;
    this.setState({ name });
  }

  handleChangeInputTimeframe = async event => {
    const timeframe = event.target.value;
    this.setState({ timeframe });
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

  handleInsertItem = async () => {
    const { name, timeframe, priority, content } = this.state;
    // const arrayTime = timeframe.split('/');
    // const payload = { name, priority, content, timeframe: arrayTime };
    const payload = { name, timeframe, priority, content };

    await api.insertItem(payload)
      .then(res => {
        if (res) {
          window.alert('Item inserted successfully');
          this.setState({
            name: '',
            timeframe: '',
            priority: 0,
            content: '',
          });
        }
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }

  render() {
    const { name, timeframe, priority, content } = this.state;

    return (
      <Wrapper>
        <Title>Create Item</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Timeframe: </Label>
        <InputText
          type="text"
          value={timeframe}
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

export default ItemInsert;