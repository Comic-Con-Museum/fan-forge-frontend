import React, { PureComponent } from 'react';
import AriaModal from 'react-aria-modal';
import { PropTypes } from 'prop-types';
import Slider from 'react-rangeslider';
import { supportExhibit } from '../../utils/api';

// make the slider yellow & center the button
import './fixSlider.css';

// default styles
import 'react-rangeslider/lib/index.css';

import {
  AlreadySupported,
  CheckboxRow,
  FieldGroup,
  LabelRow,
  SubmitButton,
  SubmitForm,
  Title
} from './StyledComponents';

class Survey extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visits: 5,
      rating: 5,
      male: false,
      female: false,
      kids: false,
      teenagers: false,
      adults: false
    };

    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
    this.getApplicationNode = this.getApplicationNode.bind(this);
  };

  activateModal = () => {
    this.props.parentRef.setState({ showModal: true });
  };

  deactivateModal = () => {
    this.props.parentRef.setState({ showModal: false });
  };

  getApplicationNode = () => {
    return document.getElementById('root');
  };

  submit = () => {
    const { visits, rating, male, female, kids, teenagers, adults } = this.state;
    const data = {
      visits,
      rating,
      populations: {
        male, female, kids, teenagers, adults
      }
    };
    // do callback after the exhibit post returns
    supportExhibit(this.props.exhibitId, data, () => {
      this.deactivateModal();
      // refresh parent page, showing the updated count
      this.props.parentRef.componentDidMount();
    });
  }

  handleTimesChange = value => {
    this.setState({
      visits: value
    });
  };

  handleRatingChange = value => {
    this.setState({
      rating: value
    });
  }


  handleCheckChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  }

  render() {
    const horizontalLabels = {
      0: 'Not at all',
      10: 'Very likely'
    }
    return (
      <AriaModal
        titleText={`Supporting exhibit: ${this.props.title}`}
        onExit={this.deactivateModal}
        initialFocus="#demo-one-modal"
        getApplicationNode={this.getApplicationNode}
        underlayStyle={{ paddingTop: '2em' }}
      >
        <SubmitForm id="demo-one-modal">
          <Title>Support {this.props.title}</Title>
          <LabelRow>
            Before you can add your support for this idea, we'd like to ask you
            a couple of questions.
          </LabelRow>
          { this.props.alreadySupported ?
              <AlreadySupported>
                You already supported this exhibit. Changes will not be made.
              </AlreadySupported> : null
          }
          <FieldGroup>
            <div>How many times would you visit this exhibit?</div>
            <Slider
              labels={{1: 'Once', 10: 'Every time'}}
              format={value => `${value}0%`}
              min={1}
              max={10}
              value={this.state.visits}
              onChange={this.handleTimesChange}
            />
          </FieldGroup>
          <FieldGroup>
            <LabelRow>
              Groups of people you feel would view this exhibit (check all that apply)
            </LabelRow>
            <CheckboxRow>
              <label>Male
                <input
                  name="male"
                  type="checkbox"
                  value={this.state.male}
                  onChange={this.handleCheckChange} />
              </label>
              <label>Female
                <input
                  name="female"
                  type="checkbox"
                  value={this.state.female}
                  onChange={this.handleCheckChange} />
              </label>
              <label>Kids
                <input
                  name="kids"
                  type="checkbox"
                  value={this.state.kids}
                  onChange={this.handleCheckChange} />
              </label>
              <label>Teenagers
                <input
                  name="teenagers"
                  type="checkbox"
                  value={this.state.teenagers}
                  onChange={this.handleCheckChange} />
              </label>
              <label>Adults
                <input
                  name="adults"
                  type="checkbox"
                  value={this.state.adults}
                  onChange={this.handleCheckChange} />
              </label>
          </CheckboxRow>
          </FieldGroup>
          <FieldGroup>
            <div>How likely would you be to recommend this exhibit to a friend?</div>
            <Slider
              labels={{0: 'Not likely', 10: 'Definitely'}}
              format={value => `${value * 10}%`}
              min={0}
              max={10}
              value={this.state.rating}
              onChange={this.handleRatingChange}
            />
          </FieldGroup>
          <SubmitButton onClick={this.submit}>Submit</SubmitButton>
        </SubmitForm>
      </AriaModal>
    );
  }
}

export default Survey;
