import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
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
    if (this.props.isLoading) {
      return <div>Fetching hero stats from API...</div>
    } else {
      return (
        <div>
          <HeroStatsNav />
          <Container>
            {this.props.children && React.cloneElement(this.props.children, {
              ...this.props
            })}
          </Container>
        </div>
      )
    }
  }

  render() {
    const { errorMessage } = this.props 

    return (
      <div>
        {this.renderHeroStats()}
        {errorMessage.length > 0 &&
          <div>{errorMessage}</div>
        }
      </div>
    )
  }
}

function orderProHeroStats(stats, orderBy, direction) {
  if (direction === 'desc') {
    if (orderBy === 'winrate') {
      return stats.sort((a, b) => {
        return b.pro_win / b.pro_pick - a.pro_win / a.pro_pick
      })
    } else if (orderBy === 'picks') {
      return stats.sort((a, b) => {
        return b.pro_pick - a.pro_pick
      })
    } else if (orderBy ==='bans') {
      return stats.sort((a, b) => {
        return b.pro_ban - a.pro_ban
      })
    }
  } else if (direction === 'asc') {
    if (orderBy === 'winrate') {
      return stats.sort((a, b) => {
        return a.pro_win / a.pro_pick - b.pro_win / b.pro_pick
      })
    } else if (orderBy === 'picks') {
      return stats.sort((a, b) => {
        return a.pro_pick - b.pro_pick
      })
    } else if (orderBy ==='bans') {
      return stats.sort((a, b) => {
        return a.pro_ban - b.pro_ban
      })
    }
  }
}

function mapStateToProps(state) {
  const { isLoading, heroStats, errorMessage } = state.api
  const { proOrderBy, proOrderDirection, publicOrderBy, publicOrderDirection } = state.heroStats

  return {
    isLoading,
    heroStats: orderProHeroStats(heroStats, proOrderBy, proOrderDirection),
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