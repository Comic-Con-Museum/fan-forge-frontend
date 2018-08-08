import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'redux-first-router-link'
import { goToPage } from '../actions'
import '../css/Sidebar.css'

const Sidebar = () => (
  <div className='sidebar'>
    <NavLink activeClassName='active' exact to='/'>
      HOME
    </NavLink>
    <NavLink activeClassName='active' to='/entry'>
      Idea Page
    </NavLink>
    <NavLink activeClassName='active' to='/Profile'>
      My Profile
    <NavLink activeClassName='active' to='/detail'>
      Detail
    </NavLink>
    <NavLink activeClassName='active' to='/feed'>
      Feed
    </NavLink>
  </div>
)

const mapDispatch = { onClick: goToPage }
const mapState = ({ location }) => ({ path: location.pathname })
export default connect(
  mapState,
  mapDispatch
)(Sidebar)
