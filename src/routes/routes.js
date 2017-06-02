import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import store from '../store/store'
import App from '../containers/App'

import Matches from '../containers/Matches'
import ProMatches from '../components/matches/ProMatches'
import PublicMatches from '../components/matches/PublicMatches'

import HeroStats from '../containers/HeroStats'
import HeroStatsPro from '../components/hero_stats/HeroStatsPro'
import HeroStatsPublic from '../components/hero_stats/HeroStatsPublic'

import About from '../containers/About'

const history = syncHistoryWithStore(browserHistory, store)

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/matches" />

        <Route path="matches" component={Matches}>
          <IndexRedirect to="/matches/pro" />        
          <Route path="pro" component={ProMatches}/>
          <Route path="public" component={PublicMatches}/>
        </Route>

        <Route path="heroes" component={HeroStats}>
          <IndexRedirect to="/heroes/pro" />        
          <Route path="pro" component={HeroStatsPro}/>
          <Route path="public" component={HeroStatsPublic}/>
        </Route>

        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>
)

export default Root