import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' // eslint-disable-line

import Sidebar from './Sidebar'
import Switcher from './Switcher'

import '../css/App.css'

export default () => (
  <MuiThemeProvider>
    <div>
      <div className='app'>
        <Sidebar />
        <Switcher />
      </div>
    </div>
  </MuiThemeProvider>
)
