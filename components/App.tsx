import Admin from './Admin/Admin'
import Client from './Client/Client'
import Instructor from './Instructor/Instructor'
import * as React from 'react'

export default class App extends React.Component<{},{}> {
  render(){    

    return (
      <div>
        <h2>{this.props.children}</h2>
      </div>
    ) 
    
    
  }
}