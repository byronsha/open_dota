import React from 'react'
import ReactDom from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { AppContainer } from 'react-hot-loader'
import Routes from './routes/routes'
import './main.scss'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

ReactDom.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppContainer>
      <Routes />
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./routes/routes', () => {
    ReactDom.render(
      <AppContainer>
        <Routes />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
