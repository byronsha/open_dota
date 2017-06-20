import React from 'react'
import {connect} from 'react-redux'
import {Container, Grid} from 'semantic-ui-react'
import MatchNav from '../components/match/MatchNav'
import GraphsSubNav from '../components/match/GraphsSubNav'
import Loader from '../components/Loader'
import {fetchMatchDetails} from '../actions/api'

class Match extends React.Component {
  componentDidMount() {
    this.props.fetchMatchDetails(this.props.routeParams.match_id)
  }

  render() {
    const {
      matchDetails,
      matchDetailsLoading,
      errorMessage,
      location,
      router,
      children
    } = this.props
    const showGraphsSubNav = location.pathname.indexOf('/graphs/') !== -1 ? true : false

    if (matchDetailsLoading || !matchDetails) {
      return <Loader />
    }

    return (
      <div>
        <MatchNav router={router} />
        {showGraphsSubNav && <GraphsSubNav router={router} />}

        {children && React.cloneElement(children, {...this.props})}

        {errorMessage && <div>{errorMessage}</div>}
      </div>
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