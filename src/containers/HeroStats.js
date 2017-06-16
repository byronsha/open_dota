import React from 'react'
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import HeroStatsNav from '../components/hero_stats/HeroStatsNav'
import { fetchHeroStats } from '../actions/api'
import {
  proSetOrderBy,
  proSetOrderDirection,
  publicSetOrderBy,
  publicSetOrderDirection
} from '../actions/heroStats'

class HeroStats extends React.Component {
  componentDidMount() {
    this.props.fetchHeroStats()
  }

  renderHeroStats() {
    if (this.props.heroStatsLoading) {
      return <Loader />
    } else {
      return (
        <div>
          {this.props.children && React.cloneElement(this.props.children, {
            ...this.props
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <HeroStatsNav path={this.props.location.pathname} router={this.props.router} />

        {this.renderHeroStats()}
        
        {this.props.errorMessage.length > 0 &&
          <div>{this.props.errorMessage}</div>
        }
      </div>
    )
  }
}

function orderProHeroStats(stats, orderBy, direction) {
  const statsCopy = JSON.parse(JSON.stringify(stats))
  
  return statsCopy.sort((a, b) => {
    if (direction === 'desc') {
      switch (orderBy) {
        case 'winrate':
          return b.pro_win / b.pro_pick - a.pro_win / a.pro_pick
        case 'picks':
          return b.pro_pick - a.pro_pick
        case 'bans':
          return b.pro_ban - a.pro_ban
        case 'name':
          return b.localized_name < a.localized_name ? -1 : 1
        default:
          return b.localized_name < a.localized_name ? -1 : 1        
      }
    } else {
      switch (orderBy) {
        case 'winrate':
          return a.pro_win / a.pro_pick - b.pro_win / b.pro_pick
        case 'picks':
          return a.pro_pick - b.pro_pick
        case 'bans':
          return a.pro_ban - b.pro_ban
        case 'name':
          return a.localized_name < b.localized_name ? -1 : 1      
        default:
          return a.localized_name < b.localized_name ? -1 : 1        
      }
    }
  })
}

function orderPublicHeroStats(stats, orderBy, direction) {
  const statsCopy = JSON.parse(JSON.stringify(stats))
  
  return statsCopy.sort((a, b) => {
    if (direction === 'desc') {
      switch (orderBy) {
        case '1k_winrate':
          return b['1000_win'] / b['1000_pick'] - a['1000_win'] / a['1000_pick']
        case '1k_picks':
          return b['1000_pick'] - a['1000_pick']
        case '2k_winrate':
          return b['2000_win'] / b['2000_pick'] - a['2000_win'] / a['2000_pick']
        case '2k_picks':
          return b['2000_pick'] - a['2000_pick']
        case '3k_winrate':
          return b['3000_win'] / b['3000_pick'] - a['3000_win'] / a['3000_pick']
        case '3k_picks':
          return b['3000_pick'] - a['3000_pick']
        case '4k_winrate':
          return b['4000_win'] / b['4000_pick'] - a['4000_win'] / a['4000_pick']
        case '4k_picks':
          return b['4000_pick'] - a['4000_pick']
        case '5k_winrate':
          return b['5000_win'] / b['5000_pick'] - a['5000_win'] / a['5000_pick']
        case '5k_picks':
          return b['5000_pick'] - a['5000_pick']
        case 'name':
          return b.localized_name < a.localized_name ? -1 : 1
        default:
          return b.localized_name < a.localized_name ? -1 : 1        
      }
    } else {
      switch (orderBy) {
        case '1k_winrate':
          return a['1000_win'] / a['1000_pick'] - b['1000_win'] / b['1000_pick']
        case '1k_picks':
          return a['1000_pick'] - b['1000_pick']
        case '2k_winrate':
          return a['2000_win'] / a['2000_pick'] - b['2000_win'] / b['2000_pick']
        case '2k_picks':
          return a['2000_pick'] - b['2000_pick']
        case '3k_winrate':
          return a['3000_win'] / a['3000_pick'] - b['3000_win'] / b['3000_pick']
        case '3k_picks':
          return a['3000_pick'] - b['3000_pick']
        case '4k_winrate':
          return a['4000_win'] / a['4000_pick'] - b['4000_win'] / b['4000_pick']
        case '4k_picks':
          return a['4000_pick'] - b['4000_pick']
        case '5k_winrate':
          return a['5000_win'] / a['5000_pick'] - b['5000_win'] / b['5000_pick']
        case '5k_picks':
          return a['5000_pick'] - b['5000_pick']
        case 'name':
          return a.localized_name < b.localized_name ? -1 : 1
        default:
          return a.localized_name < b.localized_name ? -1 : 1       
      }
    }
  })
}

function mapStateToProps(state) {
  const { heroStatsLoading, heroStats, errorMessage } = state.api
  const { proOrderBy, proOrderDirection, publicOrderBy, publicOrderDirection } = state.heroStats

  return {
    heroStatsLoading,
    heroStatsPro: orderProHeroStats(heroStats, proOrderBy, proOrderDirection),
    heroStatsPublic: orderPublicHeroStats(heroStats, publicOrderBy, publicOrderDirection),
    errorMessage,
    proOrderBy,
    proOrderDirection,
    publicOrderBy,
    publicOrderDirection
  }
}

const mapDispatchToProps = ({
  fetchHeroStats,
  proSetOrderBy,
  proSetOrderDirection,
  publicSetOrderBy,
  publicSetOrderDirection
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroStats)