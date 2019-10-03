import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { ThemeProvider } from '@material-ui/styles'
import './index.css';
import theme from './utils/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
