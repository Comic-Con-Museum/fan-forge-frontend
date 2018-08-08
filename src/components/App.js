import React from 'react'
import Sidebar from './Sidebar'
import Switcher from './Switcher'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
