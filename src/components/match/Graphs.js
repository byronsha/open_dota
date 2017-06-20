import React from 'react'
import GraphsSubNav from './GraphsSubNav'

class Graphs extends React.Component {
  render() {
    const {children, matchDetails} = this.props

    return (
      <div>
        {children && React.cloneElement(children, {matchDetails})}
      </div>
    )
  }
}

export default Graphs