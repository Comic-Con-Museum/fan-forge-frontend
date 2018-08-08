import React, { Component } from 'react'
import TagsInput from 'react-tagsinput'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Step from './Step';

import '../css/Submit.css'
import 'react-tagsinput/react-tagsinput.css' 

export default class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      title: '',
      description: '',
      picture: '',
      currentStep: 1,
    }
    this.handleTags = this.handleTags.bind(this);
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

  render() {
    return (
      <div className='wizard'>
        <form className='wizard__form' onSubmit={this.handleFormSubmit} noValidate autoComplete="off">
          <Step stepNumber='1' className='form__leftPanel' currentStep={this.state.currentStep}>
           <h1> salut </h1>
          </Step>
        </form>
        <div className='wizard__preview'>
          <h1> hey hey hey ;) </h1>
        </div>
        <div className='wizard__controls'>
          <div className='wizard__dots'>
            <button className='current'/>
            <button disabled/>
            <button disabled/>
            <button disabled/>
          </div>
        </div>
      </div>
    );
  }
};