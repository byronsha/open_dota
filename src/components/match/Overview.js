import React from 'react'
import MatchDetails from './MatchDetails'
import Portraits from './Portraits'

const Overview = ({matchDetails}) => (
  <div>
    <MatchDetails matchDetails={matchDetails} />
    <Portraits matchDetails={matchDetails} />
  </div>
)

export default Overview