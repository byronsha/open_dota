import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import MatchDetails from '../components/match/MatchDetails'
import Loader from '../components/Loader'
import { fetchMatchDetails } from '../actions/api'

class Match extends React.Component {
  componentDidMount() {
    this.props.fetchMatchDetails(this.props.routeParams.match_id)
  }

  render() {
    const { matchDetails, matchDetailsLoading, errorMessage } = this.props

    return (
      <Container>
        {matchDetailsLoading || !matchDetails ? (
          <Loader />
        ) : (
          <MatchDetails {...this.props} />
        )}

        {errorMessage && <div>{errorMessage}</div>}
      </Container>
    )
  }
}

function mapStateToProps(state) {
  const {
    matchDetails,
    matchDetailsLoading,
    errorMessage
  } = state.api
  
  return {
    matchDetails,
    matchDetailsLoading,
    errorMessage
  }
}

const mapDispatchToProps = ({
  fetchMatchDetails
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Match)