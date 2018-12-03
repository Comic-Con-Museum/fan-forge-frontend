import React, { PureComponent } from 'react';
import AriaModal from 'react-aria-modal';
import { PropTypes } from 'prop-types';
import Slider from 'react-rangeslider';
// default styles
//import 'react-rangeslider/lib/index.css'


import {
  FieldGroup,
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
    alert(JSON.stringify(this.state));
/*
{
  visits: integer // [1-10] How many times the respondent would visit this exhibit
  rating: integer // [0-10] Rating given by the user, for NPS calculation
  populations: { // Which populations the respondent thinks would like this
    // for each of these: `true` means the population would support it
    male: boolean
    female: boolean
    kids: boolean
    teenagers: boolean
    adults: boolean
  }
}*/
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

  handleMaleChange = event => {
    this.setState({
      male: event.target.value
    });
  }

  handleFemaleChange = event => {
    this.setState({
      female: event.target.value
    });
  }

  handleKidsChange = event => {
    this.setState({
      kids: event.target.value
    })
  }

  handleTeenagersChange = event => {
    this.setState({
      teenagers: event.target.value
    });
  }

  handleAdultsChange = event => {
    this.setState({
      adults: event.target.value
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
          <Title>Support the Exhibit, {this.props.title}</Title>
          <p>
            Before you add your support for this idea, we'd like to as you
            a couple of questions.
          </p>
          <FieldGroup>
            <div>First question: </div>
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
            <div>Second question: </div>
            <div>Groups of people you feel would view this exhibit (check all that apply)</div>
            <label>Male
              <input
                type="checkbox"
                value={this.state.male}
                onChange={this.handleMaleChange} />
            </label>
            <label>Female
              <input
                type="checkbox"
                value={this.state.female}
                onChange={this.handleFemaleChange} />
            </label>
            <label>Kids
              <input
                type="checkbox"
                value={this.state.kids}
                onChange={this.handleKidsChange} />
            </label>
            <label>Teenagers
              <input
                type="checkbox"
                value={this.state.teenagers}
                onChange={this.handleTeenagersChange} />
            </label>
            <label>Adults
              <input
                type="checkbox"
                value={this.state.adults}
                onChange={this.handleAdultsChange} />
            </label>
          </FieldGroup>
          <FieldGroup>
            <div>Third question: </div>
            <div>How likely would you be to recommend this exhibit to a friend?</div>
            <Slider
              labels={{0: 'Not at all', 10: 'Definitely'}}
              format={value => `${value * 10}%`}
              min={0}
              max={10}
              value={this.state.rating}
              onChange={this.handleRatingChange}
            />
          </FieldGroup>
          <div>
            <button onClick={this.submit}>Submit</button>
          </div>
        </SubmitForm>
      </AriaModal>
    );
  }
}

export default Survey;
