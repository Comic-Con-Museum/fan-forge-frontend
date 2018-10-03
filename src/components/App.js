import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Topbar from './Topbar'
import Switcher from './Switcher'
import '../css/App.css'
import strings from '../strings';


class App extends Component {
  constructor(props) {
    super(props);
    strings.setApp(this);
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Topbar />
          <Switcher />
        </div>
      </BrowserRouter>
    )
  }
}


export default App
