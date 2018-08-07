import React, { Component} from 'react';
import { connect } from 'react-redux';
import { sampleClick } from '../rdx/actions/index';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
class SampleButton extends Component {
  renderNumber() {
    return this.props.sample;
  }

  render() {
    return (
      <Button
        bsStyle="primary"
        onClick={() => this.props.sampleClick(this.props.sample)}>
        {this.renderNumber()}
      </Button>
    )
  }
}

function mapStateToProps(state) {

  return {
    sample: state.sample
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({sampleClick: sampleClick}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleButton);
