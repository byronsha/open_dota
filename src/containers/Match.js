import React from 'react'
import {connect} from 'react-redux'
import {Container, Grid} from 'semantic-ui-react'
import MatchNav from '../components/match/MatchNav'
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

    if (matchDetailsLoading || !matchDetails) {
      return <Loader />
    }

    return (
      <div>
        <MatchNav path={location.pathname} router={router} />
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