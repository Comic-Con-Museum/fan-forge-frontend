import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTags } from '../../utils/api';
import { keyCodes, defaultTag } from '../../utils/constants';
import { CollapsibleFilteringOptions } from './FilteringOptions/';

import {  
  NavBarContainer,
  NavController,
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

export class Navigation extends PureComponent {
  state = {
    showFiltering: false
  }
  
  toggleFiltering = () => this.setState(prevState => ({ showFiltering: !prevState.showFiltering }));

  toggleFilteringOnKeyPress = (event) => {
    if (event.keyCode == keyCodes.enter || event.keyCode == keyCodes.space) {
      event.preventDefault()
      this.toggleFiltering()
    }
  }

  componentDidMount() {
    const {setTags, setErrors, setActiveCalls, setNetworkStatus} = this.props

    if (setTags) {  
      setActiveCalls({'navigation': true})
      fetchTags().then(result => {
        const tagData = [defaultTag].concat(result.data.map(tag => ({
          label: tag,
          value: tag
        })));
        
        console.log(tagData)
        setTags(tagData)
        setActiveCalls({'navigation': false})
      }).catch(error => {
        console.log(error)
        setActiveCalls({'navigation': false})
        setErrors({'navigation': error})
      })
    }
  }

  render() {
    return (
      <NavBarContainer>
        <LogoImg src="https://www.balboapark.org/sites/default/files/2018-07/CCIM-OrgPageAd-275x350.jpg" />
        <ActionContainer>
          <LinkContainer>
            <NavController
              id="nav__filterController"
              controleeId="nav__filterContainer"
              isControleeActive={this.state.showFiltering}
              onClick={this.toggleFiltering}
              onKeyDown={this.toggleFilteringOnKeyPress}
            > Search </NavController>
            <CollapsibleFilteringOptions
              id="nav__filterContainer"
              controllerId="nav__filterController"
              collapseContainer={this.toggleFiltering}
              setSortOption={this.props.setSortOption}
              setFilterTag={this.props.setFilterTag}
              isCollapsed={this.state.showFiltering}
              sortValue={this.props.sortOption}
              tagValue={this.props.filterTag}
              tagOptions={this.props.tags}
            />
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

export default Navigation;