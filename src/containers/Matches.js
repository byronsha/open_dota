import React from 'react'
import { connect } from 'react-redux'
import MatchesNav from '../components/matches/MatchesNav'
import { fetchPublicMatches, fetchProMatches } from '../actions/api'

class Matches extends React.Component {
  componentDidMount() {
    this.props.fetchPublicMatches()
    this.props.fetchProMatches()
  }

  renderMatches() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          ...this.props
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        <MatchesNav path={this.props.location.pathname} router={this.props.router} />

        {this.renderMatches()}
        
        {this.props.errorMessage.length > 0 &&
          <div>{this.props.errorMessage}</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {
    publicMatchesLoading,
    proMatchesLoading,
    publicMatches,
    proMatches,
    errorMessage
  } = state.api

  return {
    publicMatchesLoading,
    proMatchesLoading,
    publicMatches,
    proMatches,
    errorMessage
  }
}

const mapDispatchToProps = ({
  fetchPublicMatches,
  fetchProMatches
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches)