import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Tab, Tabs } from '@material-ui/core'
import { NavLink } from 'redux-first-router-link'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { localeSwitch } from '../actions/';
import CCMBanner from '../assets/ccm_banner.png';
import '../css/Topbar.css'

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      showTabs: false,
      anchorEl: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value })
  };

  handleLanguageClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleLanguageClose = (event, lang) => {
    if (lang) {
      this.props.changeLocale(lang);
    }
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <div
        className='topbar'
      >
        <img className='bannerImg' src={CCMBanner} alt='Logo' />
        <Tabs
        onMouseOver={() => this.setState({showTabs: true})}
        onMouseOut={() => this.setState({showTabs: false})}
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
        <NavLink className='navLinkTab' activeClassName='active' to='/Profile'>
          <Tab label='Profile' />
        </NavLink>
        <NavLink className='navLinkTab' activeClassName='active' to='/detail'>
          <Tab label='Details' />
        </NavLink>
        <NavLink className='navLinkTab' activeClassName='active' to='/feed/hot'>
          <Tab label='Feed' />
        </NavLink>
        <Button
          aria-owns={this.state.anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleLanguageClick}
          className={`select_flag ${this.props.locale}_flag`}
        />
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={(e) => this.handleLanguageClose(e, undefined)}
        >
          <MenuItem onClick={(e) => this.handleLanguageClose(e, "en")}>English</MenuItem>
          <MenuItem onClick={(e) => this.handleLanguageClose(e, "es")}>Español</MenuItem>
        </Menu>
      </Tabs>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return({
    changeLocale: (locale) => {dispatch(localeSwitch(locale))}
  })
}
const mapState = ({ location, locale }) => ({ path: location.pathname, locale })
export default connect(mapState, mapDispatch)(Topbar)
