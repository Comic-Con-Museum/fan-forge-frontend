import React from 'react'

import Topbar from './Topbar'
import Switcher from './Switcher'
import '../css/App.css'

export default () => (
  <div>
    <div className='app'>
      <Topbar />
      <Switcher />
    </div>
  </div>
)
