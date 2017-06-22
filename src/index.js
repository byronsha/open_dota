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
import {
  indigo700, grey600, redA200,
  redA400, redA100, fullWhite,
  blueA200, darkBlack, fullBlack
} from 'material-ui/styles/colors'
import spacing from 'material-ui/styles/spacing'
import { fade } from 'material-ui/utils/colorManipulator'

const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: indigo700,
    primary2Color: indigo700,
    primary3Color: indigo700,
    accent1Color: blueA200,
    accent2Color: 'rgb(28, 28, 42)',
    accent3Color: '#fff',
    textColor: fullWhite,
    secondaryTextColor: (0, fade)(fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: (0, fade)(fullWhite, 0.1),
    disabledColor: (0, fade)(fullWhite, 0.3),
    pickerHeaderColor: (0, fade)(fullWhite, 0.12),
    clockCircleColor: (0, fade)(fullWhite, 0.12)
  }
})

ReactDom.render(
  <AppContainer>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Routes />
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./routes/routes', () => {
    ReactDom.render(
      <AppContainer>
        <StyleRoot>
          <Routes />
        </StyleRoot>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
