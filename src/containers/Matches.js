import React from 'react'
import { connect } from 'react-redux'
import MatchesNav from '../components/matches/MatchesNav'
import { fetchPublicMatches } from '../actions/api'

class Matches extends React.Component {
  componentDidMount() {
    this.props.fetchPublicMatches()
  }

  renderMatches() {
    if (this.props.matchesLoading) {
      return (
        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
          ...
        </div>
      )
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
        <MatchesNav path={this.props.location.pathname} />

        {this.renderMatches()}
        
        {this.props.errorMessage.length > 0 &&
          <div>{this.props.errorMessage}</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { matchesLoading, publicMatches, errorMessage } = state.api

  return {
    matchesLoading,
    publicMatches,
    errorMessage
  }
}

const mapDispatchToProps = ({
  fetchPublicMatches
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches)