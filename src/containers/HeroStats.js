import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { fetchHeroStats } from '../actions/api'
import HeroStatsNav from '../components/hero_stats/HeroStatsNav'

class HeroStats extends React.Component {
  componentDidMount() {
    this.props.fetchHeroStats()
  }

  renderHeroStats() {
    const { isLoading, heroStats } = this.props

    if (isLoading) {
      return <div>Fetching hero stats from API...</div>
    } else {
      return (
        <div>
          <HeroStatsNav />
          <Container>
            {this.props.children && React.cloneElement(this.props.children, {
              heroStats
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

function mapStateToProps(state) {
  return {
    isLoading: state.api.isLoading,
    heroStats: state.api.heroStats,
    errorMessage: state.api.errorMessage
  }
}

const mapDispatchToProps = ({
  fetchHeroStats
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroStats)