import React, { Component } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import { connect } from 'react-redux'
import { NavLink } from 'redux-first-router-link'
import { goToPage } from '../actions'

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
  }

  handleChange = (event, value) => {
    this.setState({ value })
  };

  renderProfileButton() {
    if (this.state.isLoggedIn) {
      return (
        <NavLink className='navLinkTab' activeClassName='active' to='/Profile'>
          <Tab label='Profile' />
        </NavLink>
      )
    }
    return (
      <Tab label='Login' onClick={() => this.setState({ modalShow: true })} />
    )
  }

  render() {
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
          {renderProfileButton()}
        </Tabs>
      </div>
    )
  }
}
const mapDispatch = { onClick: goToPage }
const mapState = ({ location }) => ({ path: location.pathname })
export default connect(mapState, mapDispatch)(Topbar)
