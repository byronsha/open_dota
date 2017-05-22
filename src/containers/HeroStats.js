import React from 'react'
import { connect } from 'react-redux'
import { fetchHeroStats } from '../actions/api'

const BASE_URL = 'https://api.opendota.com'

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
          <table>
            <tbody>
              {heroStats.map(hero => {
                const { id, localized_name, img, icon, pro_win, pro_pick, pro_ban } = hero

                return (
                  <tr key={id}>
                    <td><img src={BASE_URL + img}></img></td>
                    <td>{localized_name}</td>
                    <td>{pro_pick}</td>
                    <td>{pro_win}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }

  render() {
    const { errorMessage } = this.props 

    return (
      <div>
        <h3>Hero stats</h3>

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