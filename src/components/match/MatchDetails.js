import React from 'react'
import ta from 'time-ago'
import { Grid, Header } from 'semantic-ui-react'
import { secondsToTime } from '../../util'

const MatchDetails = ({ matchDetails }) => {
  const {
    match_id,
    duration,
    start_time,
    radiant_score,
    dire_score,
    radiant_win
  } = matchDetails

  const durationTime = secondsToTime(duration)
  const timeAgo = ta().ago(start_time * 1000)

  return (
    <Grid.Row className="match-details">
      <Grid.Column width={5}>
        <span className={`victory-text huge ${radiant_win ? 'green' : 'red'}`}>
          {radiant_win ? 'Radiant' : 'Dire'} Victory
        </span>
      </Grid.Column>
      <Grid.Column width={6}>
        <div className="match-header">
          <div className="team-kills green">{radiant_score}</div>
          <div>
            <div className="game-type">CAPTAINS MODE</div>
            <div className="duration">{durationTime}</div>
            <div className="time-ago">{timeAgo}</div>
          </div>
          <div className="team-kills red">{dire_score}</div>
        </div>
      </Grid.Column>
      <Grid.Column width={5}>
        <ul>
          <li>
            MATCH ID
            <div>{match_id}</div>
          </li>
          <li>
            REGION
            <div>.</div>
          </li>
        </ul>
      </Grid.Column>
    </Grid.Row>
  )
}

export default MatchDetails