import React from 'react'
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import MmrNav from '../components/mmr/MmrNav'
import { fetchMmrDistribution } from '../actions/api'

class Mmr extends React.Component {
  componentDidMount() {
    this.props.fetchMmrDistribution()
  }

  renderMmr() {
    if (this.props.mmrDistrubitionLoading || !this.props.mmrDistribution) {
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
        <MmrNav path={this.props.location.pathname} />

        {this.renderMmr()}

        {this.props.errorMessage.length > 0 &&
          <div>{this.props.errorMessage}</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {
    mmrDistributionLoading,
    mmrDistribution,
    errorMessage
  } = state.api

  return {
    mmrDistributionLoading,
    mmrDistribution,
    errorMessage  
  }
}

const mapDispatchToProps = ({
  fetchMmrDistribution
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mmr)