import React from 'react'
import ta from 'time-ago'
import { Grid, Header } from 'semantic-ui-react'
import { secondsToTime } from '../../util'

const headerStyle = {
  margin: '60px 0px'
}

const ulStyle = {
  textAlign: 'right'
}

const liStyle = {
  display: 'inline-block'
}

const MatchDetails = ({ matchDetails }) => {
  const {
    match_id,
    duration,
    start_time,
    radiant_score,
    dire_score,
    radiant_win,
    average_mmr
  } = matchDetails

  const durationTime = secondsToTime(duration)
  const timeAgo = ta().ago(start_time * 1000)

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
          <span>{radiant_win ? 'Radiant' : 'Dire'} Victory</span>
        </Grid.Column>
        <Grid.Column width={6}>
          <Header inverted as="h2" textAlign="center" style={headerStyle}>
            <span>{radiant_score}</span>
            <span>{durationTime}</span>
            <span>{dire_score}</span>
            <div>Started {timeAgo}</div>
          </Header>
        </Grid.Column>
        <Grid.Column width={5}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <div>MATCH ID</div>
              {match_id}
            </li>
            <li style={liStyle}>
              <div>AVG MMR</div>
              {average_mmr}
            </li>
          </ul>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MatchDetails