import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import {
  NavBarContainer,
  LogoImg,
  LinkContainer,
  SubmitLoginContainer,
  SubmitButton,
  ActionContainer,
  LoginButton
} from './StyledComponents';

const linkStyle = {
  color: 'yellow',
  fontFamily: "Helvetica Neue",
  fontSize: '28px',
  fontWeight: 500,
  textTransform: 'uppercase',
  margin: '0 20px',
  textDecoration: 'none'
}

const activeStyle = {
  color: '#b4b8c5',
  fontFamily: "Helvetica Neue",
  fontSize: '28px',
  fontWeight: 500,
  textTransform: 'uppercase',
}

class NavBar extends PureComponent {
  render() {
    return (
      <NavBarContainer>
        <LogoImg src="https://www.balboapark.org/sites/default/files/2018-07/CCIM-OrgPageAd-275x350.jpg"/>
        <ActionContainer>
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
            <SubmitButton>SUBMIT AN IDEA</SubmitButton>
            <LoginButton>LOG IN</LoginButton>
          </SubmitLoginContainer>
        </ActionContainer>
      </NavBarContainer>
    );
  }
}

export default NavBar;