import * as React from 'react'

import Admin from '../Admin/Admin'
import Client from '../Client/Client'
import Instructor from '../Instructor/Instructor'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './normalize.scss'; 

export default class App extends React.Component<{},{}> {
  render(){    

    return (
      <MuiThemeProvider>
          {this.props.children}
      </MuiThemeProvider>
    ) 

  }
}