import React, { Component, PropTypes } from 'react';

import store from "./rdx/index";

import SampleButton from './containers/sample_button';

// Using CSS Modules mechanism
import styles from "./assets/css/style.css";

////////////////////////////////////////////////////////////////////////////////
export default class App extends Component {

  render() {

    return (
      <div>
        <SampleButton />
      </div>
    );
  }
}
