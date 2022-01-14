import React, { Component } from 'react';
import api from '../api';
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
`;

const InputText = styled.input.attrs({
  className: 'form-control',
})`
  margin: 5px auto;
  max-width: 30%;
  text-align: center;
`;

const Fieldset = styled.fieldset.attrs({
  className: 'form-control',
})`
  border-color: transparent;
  margin: 1em auto 0.5em;
  max-width: 50%;
  min-height: 6em;
`;

const DayInput = styled.input.attrs({
  className: '',
})`
  margin: 5px auto;
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
    super(props);
    this.state = {
      _id: '',
      name: '',
      daysOfWeek: {},
      timeframeNote: '',
      priority: 0,
      content: '',
    };
  }

  componentDidMount() {
    const itemId = this.props.match.params.id;
    this.fetchSingleItem(itemId).then(resp => {
      const { item } = resp.data;
      this.setState({ ...item });
    });
  }

  fetchSingleItem = itemId => {
    return api
      .getItemById(itemId)
      .then(resp => {
        console.log('getItemById: resp');
        console.log(resp);
        return resp;
      })
      .catch(err => {
        console.error(`ERROR in 'fetchSingleItem': ${err}`);
        console.error(err);
        return err;
      });
  };

  handleChangeInputName = async event => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleChangeDays = async event => {
    const { checked } = event.target;
    const { dayIndex } = event.target.dataset;
    const { daysOfWeek } = this.state;
    const { DAYS_OF_WEEK } = shared;

    if (checked && !daysOfWeek[dayIndex]) {
      daysOfWeek[dayIndex] = DAYS_OF_WEEK[dayIndex];
    } else if (!checked && daysOfWeek[dayIndex]) {
      delete daysOfWeek[dayIndex];
    }
    this.setState({ daysOfWeek: daysOfWeek });
  };

  updateSingleItem = item => {
    return api
      .updateItemById(item._id, item)
      .then(resp => {
        console.log('updateItem: resp');
        console.log(resp);
        if ((resp.data || {}).success) {
          const newItem = JSON.parse(resp.config.data);
          console.log('newItem: ', newItem);
        }
        return resp;
      })
      .catch(err => {
        console.error(`ERROR in 'updateSingleItem': ${err}`);
        console.error(err);
        return err;
      });
  };

  handleChangeInputTimeframe = async event => {
    const timeframeNote = event.target.value;
    this.setState({ timeframeNote });
  };

  handleChangeInputPriority = async event => {
    const priority = event.target.validity.valid ? event.target.value : this.state.priority;

    this.setState({ priority });
  };

  handleChangeInputContent = async event => {
    const content = event.target.value;
    this.setState({ content });
  };

  handleUpdateItem = event => {
    const { _id, name, daysOfWeek, timeframeNote, priority, content } = this.state;
    const item = { _id, name, daysOfWeek, timeframeNote, priority, content };

    return this.updateSingleItem(item)
      .then(resp => {
        console.log('handleUpdateItem: resp');
        console.log(resp);
        if (typeof resp === 'object' && resp.status < 300 && resp.status >= 200) {
          window.alert('Item updated successfully');
          return true;
        } else {
          throw resp;
        }
      })
      .catch(err => {
        window.alert(`There was an error updating the item... :(`);
        console.error('handleUpdateItem: err');
        console.error(err);
      });
  };

  confirmUpdateItem = event => {
    if (window.confirm(`Are you sure you want to update this item? ${this.state._id}`)) {
      return this.handleUpdateItem(event);
    }
  };

  render() {
    const { _id, name, daysOfWeek, timeframeNote, priority, content } = this.state;

    const { DAYS_OF_WEEK } = shared;

    return (
      _id && (
        <Wrapper>
          <Title>Create Item</Title>

          <Label>Name: </Label>
          <InputText type="text" value={name} onChange={this.handleChangeInputName} />

          <Fieldset>
            <legend>Day(s) of the Week: </legend>
            {Object.keys(DAYS_OF_WEEK).map((dayInt, i) => (
              <React.Fragment key={DAYS_OF_WEEK[dayInt]}>
                <DayInput
                  type="checkbox"
                  id={DAYS_OF_WEEK[dayInt]}
                  className="day-checkbox-input"
                  defaultValue={daysOfWeek[dayInt] && daysOfWeek[dayInt] !== ''}
                  data-day-index={dayInt}
                  onChange={this.handleChangeDays}
                  defaultChecked={daysOfWeek[dayInt] && daysOfWeek[dayInt] !== ''}
                />
                <Label htmlFor={DAYS_OF_WEEK[dayInt]}>{DAYS_OF_WEEK[dayInt]}</Label>
              </React.Fragment>
            ))}
          </Fieldset>

          <Label>Timeframe Note: </Label>
          <InputText type="text" value={timeframeNote} onChange={this.handleChangeInputTimeframe} />

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
          <InputText type="textarea" value={content} onChange={this.handleChangeInputContent} />

          <Button onClick={this.confirmUpdateItem}>Update Item</Button>
          <CancelButton href={'/items'}>Cancel</CancelButton>
        </Wrapper>
      )
    );
  }
}

export default ItemUpdate;
