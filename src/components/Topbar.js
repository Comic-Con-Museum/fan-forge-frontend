import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import { Tab, Tabs } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import strings from '../strings';

import CCMBanner from '../assets/ccm_banner.png'

import '../css/Topbar.css'

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      anchorEl: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this)
  }

  handleChange(event, value) {
    this.setState({ value })
  }

  handleLanguageClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleLanguageClose = (event, lang) => {
    if (lang) {
      strings.setLang(lang);
    }
    this.setState({ anchorEl: null });
  };

  toggle() {
    this.setState(state => ({
      modalShow: !state.modalShow
    }));
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
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Link className='navLinkTab' to='/'>
            <Tab label='Home' />
          </Link>
          <Link className='navLinkTab' to='/feed'>
            <Tab label='Feed' />
          </Link>
          <Link className='navLinkTab' to='/about'>
            <Tab label='About' />
          </Link>
          <Link className='navLinkTab' to='/submit'>
            <Tab label='Submit Idea' />
          </Link>
          <Button
            aria-owns={this.state.anchorEl ? 'simple-menu' : null}
            aria-haspopup='true'
            onClick={this.handleLanguageClick}
            className={`select_flag ${strings.getLang()}_flag`}
          />
          <Menu
            id='simple-menu'
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={e => this.handleLanguageClose(e, undefined)}
          >
            <MenuItem onClick={e => this.handleLanguageClose(e, 'en')}>English</MenuItem>
            <MenuItem onClick={e => this.handleLanguageClose(e, 'es')}>Español</MenuItem>
          </Menu>
        </Tabs>
      </div>
    )
  }
}

export default Topbar
