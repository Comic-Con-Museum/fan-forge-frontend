import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Tab, Tabs, TextField } from '@material-ui/core'
import { NavLink } from 'redux-first-router-link'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { localeSwitch } from '../actions/';
import CCMBanner from '../assets/ccm_banner.png';
import { bindActionCreators } from 'redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { userLogin } from '../actions'
import '../css/Topbar.css'

class Topbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      showTabs: false,
      anchorEl: null,
      isLoggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggle = this.toggle.bind(this)
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

/*function mapDispatchToProps(dispatch) {

  return bindActionCreators({ userLogin }, dispatch)
}
*/
const mapDispatch = (dispatch) => {
  return({
    changeLocale: (locale) => {dispatch(localeSwitch(locale))}
  })
}
const mapState = ({ location, locale, username }) => ({ path: location.pathname, locale, username })
export default connect(mapState, mapDispatch)(Topbar)