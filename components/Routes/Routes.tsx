import {Router, Route, browserHistory} from 'react-router';
import * as React from 'react'; 
import App from '../App';
import Client from '../Client/Client';
import Login from '../Login/Login';


export const Routes = () => (
  <Router history={browserHistory}>

    <Route path="/" component={App}>

      <Route path="login" component={Login}></Route>
    
    
      // <Route path="client" component={Client}>

      // </Route>
  
    </Route>
 

  </Router>

)


// <Route path="login" component={}></Route>
//     <Route path="home" component={}></Route>


// <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <Route path="about" component={About}/>
//       <Route path="users" component={Users}>
//         <Route path="/user/:userId" component={User}/>
//       </Route>
//       <Route path="*" component={NoMatch}/>
//     </Route>
//   </Router>

// <Route path="instructor" component={}>
        
        // </Route>

        // <Route path="admin" component={}>
        
        // </Route>