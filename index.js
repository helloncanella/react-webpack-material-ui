import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Content from './components/App';

import injectTapEventPlugin from 'react-tap-event-plugin';

const App = () => (
  <MuiThemeProvider>
    <Content />
  </MuiThemeProvider>
);

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('container')
);