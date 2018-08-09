import React, { Component } from 'react'
import { Tab, Tabs, TextField } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'redux-first-router-link'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { userLogin } from '../actions'

import CCMBanner from '../assets/ccm_banner.png'

import '../css/Topbar.css'

class Topbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      isLoggedIn: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  handleChange = (event, value) => {
    this.setState({ value })
  };

  toggle() {
    this.setState({
      modalShow: !this.state.modalShow
    })
  }

  renderProfileButton() {
    if (this.props.username !== '' && this.props.username !== null) {
      return (
        <NavLink className='navLinkTab' activeClassName='active' to='/Profile'>
          <Tab label='Profile' />
        </NavLink>
      )
    }
    return (
      <Tab className='navLinkTab' label='Login' onClick={() => this.toggle()} />
    )
  }

  render() {
    console.log(this.props)
    return (
      <div
        className='topbar'
      >
        <img className='bannerImg' src={CCMBanner} alt='Logo' />
        <Tabs
          className='topnavbar'
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor=''
          textColor='primary'
          centered
        >
        <NavLink className='navLinkTab' activeClassName='active' exact to='/'>
          <Tab label='Home' />
        </NavLink>
        <NavLink className='navLinkTab' activeClassName='active' to='/entry'>
          <Tab label='Entry' />
        </NavLink>
        <NavLink className='navLinkTab' activeClassName='active' to='/detail'>
          <Tab label='Details' />
        </NavLink>
        <NavLink className='navLinkTab' activeClassName='active' to='/feed'>
          <Tab label='Feed' />
        </NavLink>
          {this.renderProfileButton()}
        </Tabs>
        <Modal
          isOpen={this.state.modalShow}
          toggle={this.toggle}
          className='exhibit-modal'
          centered
          size='lg'
        >
          <ModalHeader toggle={this.toggle}>Comic-Con Museum Login</ModalHeader>
          <ModalBody>
            <TextField
              id='password-input'
              label='Username'
              margin='normal'
              autoFocus
              onChange={event => this.props.userLogin(event.target.value)}
          />
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>Login</Button>{' '}
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ userLogin }, dispatch)
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    username: state.username
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)
