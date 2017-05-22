import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import store from '../store/store'
import App from '../containers/App'
import Home from '../containers/Home'
import HeroStats from '../containers/HeroStats'
import HeroStatsPro from '../components/hero_stats/HeroStatsPro'
import HeroStatsPublic from '../components/hero_stats/HeroStatsPublic'
import About from '../containers/About'

const history = syncHistoryWithStore(browserHistory, store)

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Home} />
        <Route path="hero_stats" component={HeroStats}>
          <IndexRedirect to="/hero_stats/pro" />        
          <Route path="pro" component={HeroStatsPro}/>
          <Route path="public" component={HeroStatsPublic}/>
        </Route>
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>
)

export default Root