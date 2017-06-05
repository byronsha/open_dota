import React from 'react'
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import MmrNav from '../components/mmr/MmrNav'
import { fetchMmrDistributions } from '../actions/api'

class Mmr extends React.Component {
  componentDidMount() {
    this.props.fetchMmrDistributions()
  }

  renderMmr() {
    if (this.props.mmrDistrubitionsLoading) {
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
    mmrDistrubitionsLoading,
    mmrDistributions,
    errorMessage
  } = state.api

  return {
    mmrDistrubitionsLoading,
    mmrDistributions,
    errorMessage  
  }
}

const mapDispatchToProps = ({
  fetchMmrDistributions
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mmr)