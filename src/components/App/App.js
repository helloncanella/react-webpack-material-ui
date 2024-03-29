import * as React from 'react'

import Admin from '../Admin/Admin'
import Client from '../ClientComponent/ClientComponent'
import Instructor from '../InstructorsList/InstructorsList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import './grid.scss'
import './App.scss'

export default class App extends React.Component {
  render() {

    return (
      <MuiThemeProvider>
        <div className="app">
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
