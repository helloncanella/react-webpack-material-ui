import {Router, Route, browserHistory} from 'react-router'
import * as React from 'react'
import App from '../App/App'
import ClientComponent from '../ClientComponent/ClientComponent'
import Login from '../Login/Login'
import NewUser from '../NewUser/NewUser'
import Home from '../Home/Home'

export const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={Login}></Route>
      <Route path="newUser" component={NewUser}></Route>
      <Route path="client/:id" >
        <Route path="home" component={Home}></Route>
      </Route>
    </Route>
  </Router>
)


