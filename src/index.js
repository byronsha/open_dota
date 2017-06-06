import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Routes from './routes/routes'
import './main.scss'

ReactDom.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
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
