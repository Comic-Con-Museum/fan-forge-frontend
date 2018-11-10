import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  NavBarContainer,
  LogoImg,
  LinkContainer,
  SubmitLoginContainer,
  SubmitButton,

} from './StyledComponents';

const linkStyle = {
  color: 'yellow',
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
      <LogoImg src="https://www.balboapark.org/sites/default/files/2018-07/CCIM-OrgPageAd-275x350.jpg"/>
      <LinkContainer>
        <NavLink to='/' exact activeStyle={activeStyle} style={linkStyle}>
          FEED
        </NavLink>
        <NavLink to='/submit' activeStyle={activeStyle} style={linkStyle}>
          SUBMIT
        </NavLink>
        <NavLink to='/about' activeStyle={activeStyle} style={linkStyle}>
          ABOUT
        </NavLink>
      </LinkContainer>
      <SubmitLoginContainer>
        <SubmitButton>Submit an Idea</SubmitButton>
        <SubmitButton>Submit an Idea</SubmitButton>
      </SubmitLoginContainer>
    </NavBarContainer>
  )
}

export default NavBar;