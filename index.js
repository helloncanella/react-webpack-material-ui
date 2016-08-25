import * as ReactDOM from 'react-dom'
import { Routes } from './components/Routes/Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <Routes />,
  document.getElementById('container')
);