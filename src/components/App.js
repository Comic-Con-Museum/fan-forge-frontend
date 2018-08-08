import React from 'react'
import Sidebar from './Sidebar'
import Switcher from './Switcher'
import '../css/App.css'

export default () => (
  <div>
    <div className="app">
      <Sidebar />
      <Switcher />
    </div>
  </div>
)
