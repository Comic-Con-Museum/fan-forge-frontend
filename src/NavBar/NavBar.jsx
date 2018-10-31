import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  NavBarContainer
} from './StyledComponents';

const linkStyle = {
  color: 'black',
  fontFamily: 'Oswald',
  fontSize: '16px',
  fontWeight: 400,
  textTransform: 'uppercase',
  margin: '0 20px',
  textDecoration: 'none'
}

const activeStyle = {
  color: '#b4b8c5',
  fontFamily: 'Oswald',
  fontSize: '16px',
  fontWeight: 400,
  textTransform: 'uppercase',
}

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink to='/' exact activeStyle={activeStyle} style={linkStyle}>
        FEED
      </NavLink>
      <NavLink to='/submit' activeStyle={activeStyle} style={linkStyle}>
        SUBMIT
      </NavLink>
      <NavLink to='/about' activeStyle={activeStyle} style={linkStyle}>
        ABOUT
      </NavLink>
    </NavBarContainer>
  )
}

export default NavBar;