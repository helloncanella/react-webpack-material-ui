// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './components/Routes/Routes';
import Oi  from './components/Oi';
import Lero from './components/Lero';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {generateInstructor} from './components/fakedData/generateInstructor'

window.generateData = generateInstructor


injectTapEventPlugin();


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);  