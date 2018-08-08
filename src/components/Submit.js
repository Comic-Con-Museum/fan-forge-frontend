import React, { Component } from 'react'
import TagsInput from 'react-tagsinput'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import Step from './Step';

import '../css/Submit.css'
import 'react-tagsinput/react-tagsinput.css' 

import strings from '../strings';

const maxSteps = 3; //from 0

export class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      exhibit: '',
      summary: '',
      inspiration: '',
      currentStep: 0,
      maxStep: 0,
    }
    this.handleTags = this.handleTags.bind(this);
    this.stepBack = this.stepBack.bind(this);
    this.stepNext = this.stepNext.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  handleChange(name, event) {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleTags(newTags) {
    this.setState({tags: newTags});
  }

  handleFormSubmit(e) {
    e.preventDefault();
    //this.props.submitForm(this.state);
  }

  stepBack() {
    if (this.state.currentStep == 0) {
      return;
    } else {
      this.setState({currentStep: this.state.currentStep - 1});
    }
  }

  stepNext() {
    if (this.state.currentStep == maxSteps ) {
      return;
    }
    if (this.state.maxStep == this.state.currentStep) {
      this.setState({maxStep: this.state.maxStep + 1});
    }
    this.setState({currentStep: this.state.currentStep + 1});
  }

  jumpToStep(step) {
    this.setState({currentStep: step});
  }

  renderButtons() {
    return new Array(4).fill().map((value, idx) => 
      <button 
        key={idx}
        className={this.state.currentStep == idx ? 'current' : '' }
        onClick={() => this.jumpToStep(idx)}
        disabled={this.state.maxStep < idx ? true : false}
        />
    )
  }

  render() {
    return (
      <div className='wizard'>
        <form className='wizard__form' onSubmit={this.handleFormSubmit} noValidate autoComplete="off">
          <Step key='0' stepNumber='0' className='form__leftPanel' currentStep={this.state.currentStep}>
           <h1 className="wizard__form__title">{strings[this.props.locale].wizard_title}</h1>
           <h3 className="wizard__form__intro">{strings[this.props.locale].wizard_intro}</h3>
          </Step>
          <Step key='1' stepNumber='1' className='form__leftPanel' currentStep={this.state.currentStep}>
            <h1 className="wizard__form__title2">{strings[this.props.locale].wizard_title2}</h1>
            <TextField
              id="exhibit"
              label={strings[this.props.locale].wizard_exhibit_name}
              value={this.state.exhibit}
              className="wizard__textfield"
              InputLabelProps={{classes: {root: 'wizard__input'}}}
              inputProps={{className: 'wizard__input-txt'}}
              onChange={(event) => this.handleChange('exhibit', event)}
              margin="normal"
              fullWidth
            />
            <TextField
              id="summary"
              label={strings[this.props.locale].wizard_short_summary}
              value={this.state.summary}
              className="wizard__textfield"
              InputLabelProps={{classes: {root: 'wizard__input'}}}
              inputProps={{className: 'wizard__input-txt'}}
              onChange={(event) => this.handleChange('summary', event)}
              margin="normal"
              multiline
              fullWidth
              rows="4"
            />
            <div class="wizard__image-container">
              <Button variant="outlined" onClick={this.stepBack} disabled={this.state.currentStep == 0}>
                {strings[this.props.locale].wizard_select_thumbnail}
              </Button>
              <Button variant="outlined" onClick={this.stepBack} disabled={this.state.currentStep == 0}>
                {strings[this.props.locale].wizard_additional_images}
              </Button>
            </div>
            <TextField
              id="inspiration"
              label={strings[this.props.locale].wizard_inspiration}
              value={this.state.inspiration}
              className="wizard__textfield"
              InputLabelProps={{classes: {root: 'wizard__input'}}}
              inputProps={{className: 'wizard__input-txt'}}
              onChange={(event) => this.handleChange('inspiration', event)}
              margin="normal"
              multiline
              fullWidth
              rows="8"
            />
          </Step>

          <div className='wizard__controls'>
            <Button variant="outlined" onClick={this.stepBack} disabled={this.state.currentStep == 0}>
              {strings[this.props.locale].back}
            </Button>
            <Button className='wizard__preview-btn' variant="contained" onClick={() => 1}>
              {strings[this.props.locale].preview}
            </Button>
            <Button variant="contained" onClick={this.stepNext} color="primary" >
              {strings[this.props.locale].next}
            </Button>
          </div>
        </form>
        <div className='wizard__preview'>
          <img src='https://placebear.com/1928/1024' />
        </div>
          <div className='wizard__dots'>
              {this.renderButtons()}
          </div>
      </div>
    );
  }
};

const mapStateToProps = ({ locale }) => ({ locale: locale });
export default connect(mapStateToProps)(Submit);