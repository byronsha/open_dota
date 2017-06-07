import React from 'react'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import store from '../store/store'
import App from '../containers/App'

import Matches from '../containers/Matches'
import ProMatches from '../components/matches/ProMatches'
import PublicMatches from '../components/matches/PublicMatches'

import Match from '../containers/Match'

import HeroStats from '../containers/HeroStats'
import HeroStatsPro from '../components/hero_stats/HeroStatsPro'
import HeroStatsPublic from '../components/hero_stats/HeroStatsPublic'

import Mmr from '../containers/Mmr'
import MmrDistribution from '../components/mmr/MmrDistribution'
import CountryMmrs from '../components/mmr/CountryMmrs'

const history = syncHistoryWithStore(hashHistory, store)

const Root = () => (
  <Provider store={store}>
    <Router history={history} key={Math.random()}>
      <Route path="/" component={App}>
        <IndexRedirect to="/matches" />

        <Route path="matches" component={Matches}>
          <IndexRedirect to="/matches/pro" />        
          <Route path="pro" component={ProMatches} />
          <Route path="public" component={PublicMatches} />
        </Route>

        <Route path="matches/:match_id" component={Match} />

        <Route path="heroes" component={HeroStats}>
          <IndexRedirect to="/heroes/pro" />        
          <Route path="pro" component={HeroStatsPro} />
          <Route path="public" component={HeroStatsPublic} />
        </Route>

        <Route path="mmr" component={Mmr}>
          <IndexRedirect to="/mmr/distribution" />
          <Route path="distribution" component={MmrDistribution} />
          <Route path="countries" component={CountryMmrs} />
        </Route>
      </Route>
    </Router>
  </Provider>
)

export default Root