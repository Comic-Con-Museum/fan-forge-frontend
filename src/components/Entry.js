import React, { Component } from 'react'
import ChipInput from 'material-ui-chip-input'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import Link from 'redux-first-router-link'
import { clean } from '../helpers';
import blankPreview from '../assets/blankDetail.jpg'
import '../css/Submit.css'
import 'react-tagsinput/react-tagsinput.css'

import strings from '../strings';

const maxSteps = 3; // from 0

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      title: '',
      summary: '',
      inspiration: '',
      description: '',
      tellus: '',
      currentStep: 0,
      maxStep: 0,
      thumbnail: '',
      imagesFile: []
    };
    this.addTag = this.addTag.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.stepBack = this.stepBack.bind(this);
    this.stepNext = this.stepNext.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(name, event) {
    this.setState({
      [name]: event.target.value
    });
  }

  addTag(newTag) {
    this.setState(state => {
      const { tags } = state;
      if (!tags.includes(newTag)) {
        tags.push(newTag);
      }
      return { tags }; // set the tags
    });
  }

  deleteTag(tag) {
    this.setState(state => {
      // need to use callback here since we remove a tag
      const { tags } = state;
      const index = tags.indexOf(tag);
      if (index > -1) {
        tags.splice(index, 1);
      }
      return { tags }; // set the tags
    });
  }

  handleFiles(name, event) {
    if (event.target && event.target.files) {
      this.setState({
        [name]: event.target.files
      });
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.state.currentStep === maxSteps && this.state.tags.length !== 0) {
      const stateCopy = Object.assign({}, this.state);
      delete stateCopy.currentStep;
      delete stateCopy.maxStep;
      stateCopy.images = [];
      // for (var i = 0; i < stateCopy.imagesFile.length; i++) {
      //   console.log()
      //   stateCopy.images[i] = getBase64(stateCopy.imagesFile[i]).then()
      // }
      delete stateCopy.imagesFile;
      clean(stateCopy);
      this.props.postExhibit(stateCopy);
    }
  }

  stepBack() {
    if (this.state.currentStep !== 0) {
      // go back 1 step
      this.setState(state => {
        let { currentStep } = state;
        currentStep--;
        return { currentStep };
      });
    }
  }

  stepNext() {
    if (this.state.currentStep !== maxSteps) {
      this.setState(state => {
        let { maxStep, currentStep } = state;
        maxStep++;
        currentStep++;
        return { maxStep, currentStep };
      });
    }
  }

  jumpToStep(step) {
    this.setState({ currentStep: step });
  }

  renderButtons() {
    return new Array(4).map((value, idx) => (
      <button
        type='button'
        key={idx}
        className={this.state.currentStep === idx ? 'current' : ''}
        onClick={() => this.jumpToStep(idx)}
        disabled={this.state.maxStep < idx}
      />
    ))
  }

  renderStep0() {
    if (this.state.currentStep === 0) {
      return (
        <div className='form__leftPanel'>
          <h1 className='wizard__form__title'>{strings.getString('wizard_title')}</h1>
          <h3 className='wizard__form__intro'>{strings.getString('wizard_intro')}</h3>
        </div>
      );
    }
    return null;
  }

  renderStep1() {
    if (this.state.currentStep === 1) {
      return (
        <div className='form__leftPanel'>
          <h1 className='wizard__form__title2'>{strings.getString('wizard_title2')}</h1>
          <TextField
            id='title'
            label={strings.getString('wizard_exhibit_name')}
            value={this.state.title}
            className='wizard__textfield wizard_textfield_title'
            InputLabelProps={{ classes: { root: 'wizard__input' } }}
            inputProps={{ className: 'wizard__input-txt' }}
            onChange={event => this.handleChange('title', event)}
            margin='normal'
            fullWidth
            required
          />
          <TextField
            id='summary'
            label={strings.getString('wizard_short_summary')}
            value={this.state.summary}
            className='wizard__textfield'
            InputLabelProps={{ classes: { root: 'wizard__input' } }}
            inputProps={{ className: 'wizard__input-txt' }}
            onChange={event => this.handleChange('summary', event)}
            margin='normal'
            multiline
            fullWidth
            rows='4'
            required
          />
          <div className='wizard__image-container'>
            <Button variant='contained' className='wizard__file-button'>
              <input type='file' className='wizard_file-input' required id='thumbnail'
                     onChange={event => this.handleFiles('thumbnail', event)} multiple/>
              <label className='wizard__file-label' htmlFor='thumbnail'>
                {this.state.thumbnail !== '' ? strings[this.props.locale].wizard_thumbnail
                  : strings.getString('wizard_select_thumbnail')}
              </label>
            </Button>
            <Button variant='contained' className='wizard__file-button'>
              <input type='file' className='wizard_file-input' id='additional'
                     onChange={event => this.handleFiles('imagesFile', event)} multiple/>
              <label className='wizard__file-label' htmlFor='additional'>
                {this.state.imagesFile && this.state.imagesFile.length !== 0 ? `${this.state.imagesFile.length} ${strings.getString('wizard_selectfiles')}`
                  : strings.getString('wizard_additional_images')}
              </label>
            </Button>
          </div>
          <TextField
            id='inspiration'
            label={strings.getString('wizard_inspiration')}
            value={this.state.inspiration}
            className='wizard__textfield margin-bottom'
            InputLabelProps={{ classes: { root: 'wizard__input' } }}
            inputProps={{ className: 'wizard__input-txt' }}
            onChange={event => this.handleChange('inspiration', event)}
            margin='normal'
            multiline
            fullWidth
            rows='8'
          />
        </div>
      );
    }
    return null;
  }

  renderStep2() {
    if (this.state.currentStep === 2) {
      return (
        <div className='form__leftPanel'>
          <h1 className='wizard__form__title2'>{strings.getString('wizard_complex')}</h1>
          <TextField
            id='description'
            label={strings.getString('wizard_provided')}
            value={this.state.description}
            className='wizard__textfield translate_up'
            InputLabelProps={{ classes: { root: 'wizard__input wizard__input--big-label' } }}
            inputProps={{ className: 'wizard__input-txt' }}
            onChange={event => this.handleChange('description', event)}
            margin='normal'
            required
            multiline
            fullWidth
            rows='10'
          />
          <TextField
            id='tellus'
            label={strings.getString('wizard_tellus')}
            value={this.state.tellus}
            className='wizard__textfield margin-bottom'
            InputLabelProps={{ classes: { root: 'wizard__input wizard__input--medium-label' } }}
            inputProps={{ className: 'wizard__input-txt' }}
            onChange={event => this.handleChange('tellus', event)}
            margin='normal'
            required
            multiline
            fullWidth
            rows='10'
          />
        </div>
      );
    }
    return null;
  }

  renderStep3() {
    if (this.state.currentStep === 3) {
      return (
        <div className='form__leftPanel'>
          <h1 className='wizard__form__title'>{strings.getString('wizard_title3')}</h1>
          <h3 className='wizard__form__intro'>{strings.getString('wizard_looksgreat')}</h3>
          <ChipInput
            value={this.state.tags}
            onAdd={this.addTag}
            classes={{ root: 'wizard_tag_container', helperText: 'wizard__tag_label' }}
            onDelete={this.deleteTag}
            helperText={strings.getString('wizard_addTags')}
            fullWidth
          />
          <div className='wizard__form__collab margin-bottom'>
            <h3>{strings.getString('wizard_inviteFriends')}</h3>
            <Button className='yellow-btn' variant='contained' onClick={() => undefined} color='primary'>
              {strings.getString('wizard_sendInvite')}
            </Button>
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className='wizard'>
        <form className='wizard__form' onSubmit={this.handleFormSubmit} noValidate autoComplete='off'>
          {this.renderStep0()}
          {this.renderStep1()}
          {this.renderStep2()}
          {this.renderStep3()}
          <div className='wizard__controls'>
            <Button variant='outlined' onClick={this.stepBack} disabled={this.state.currentStep === 0}>
              {strings.getString('back')}
            </Button>
            <Button className='wizard__preview-btn' variant='contained' onClick={() => 1}>
              {strings.getString('preview')}
            </Button>
            <Button
              className='yellow-btn'
              variant='contained'
              onClick={this.stepNext}
              color='primary'
              type='submit'
            >
              {this.state.currentStep === maxSteps ? strings.getString('finish')
                : strings.getString('next')}
            </Button>
          </div>
        </form>
        <div className='wizard__preview'>
          <img src={blankPreview} alt='preview' />
        </div>
        <div className='wizard__dots'>
          {this.renderButtons()}
        </div>
        <Drawer
          anchor='bottom'
          open={this.props.submitStatus === 'success'}
        >
          <div className='wizard__modal'>
            <h2> Your exhibit has generated ! </h2>
            <Link to={`/detail/${this.props.submitId}`}>
              <Button size='small' color='primary'>
                Check it out!
              </Button>
            </Link>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Submit;
