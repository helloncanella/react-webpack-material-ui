// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './components/Routes/Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {generateInstructor} from './components/fakedData/generateInstructor'
import {generateMessages} from './components/fakedData/generateMessages'
import generateMeetings from './components/fakedData/generateMeetings'

window.generateData = generateInstructor
window.generateMessages = generateMessages
window.generateMeetings = generateMeetings

injectTapEventPlugin();

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);  