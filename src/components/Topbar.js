import React, { Component } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import { connect } from 'react-redux'
import { NavLink } from 'redux-first-router-link'
import { goToPage } from '../actions'

import CCMBanner from '../assets/ccm_banner.png'

import '../css/Topbar.css'

class Topbar extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value })
  };

  render() {
    return (
      <div className='topbar'>
        <img className='bannerImg' src={CCMBanner} alt='Logo' />
        <Tabs
          className='topnavbar'
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor=''
          textColor=''
          centered
        >
          <Tab label='Item One' />
          <Tab label='Item Two' />
          <Tab label='Item Three' />
        </Tabs>
      </div>
    )
  }
}
// {<NavLink activeClassName='active' exact to='/'>
//   HOME
// </NavLink>
// <NavLink activeClassName='active' to='/entry'>
//   Idea Page
// </NavLink>}
const mapDispatch = { onClick: goToPage }
const mapState = ({ location }) => ({ path: location.pathname })
export default connect(mapState, mapDispatch)(Topbar)


// const Topbar = () => (
//   <div className='topbar'>
//     <NavLink activeClassName='active' exact to='/'>
//       HOME
//     </NavLink>
//     <NavLink activeClassName='active' to='/entry'>
//       Idea Page
//     </NavLink>
//     <NavLink activeClassName='active' to='/Profile'>
//       My Profile
//     </NavLink>
//     <NavLink activeClassName='active' to='/detail'>
//       Detail
//     </NavLink>
//     <NavLink activeClassName='active' to='/feed'>
//       Feed
//     </NavLink>
//   </div>
// )
