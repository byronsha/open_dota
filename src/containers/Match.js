import React from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import MatchDetails from '../components/match/MatchDetails'
import MatchPlayers from '../components/match/MatchPlayers'
import Loader from '../components/Loader'
import { fetchMatchDetails } from '../actions/api'

class Match extends React.Component {
  componentDidMount() {
    this.props.fetchMatchDetails(this.props.routeParams.match_id)
  }

  render() {
    const { matchDetails, matchDetailsLoading, errorMessage } = this.props

    return (
      <Container fluid>
        {(matchDetailsLoading || !matchDetails) ? (
          <Loader />
        ) : (
          <Grid verticalAlign="middle">
            <MatchDetails matchDetails={matchDetails} />
            <MatchPlayers matchDetails={matchDetails} />
          </Grid>
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