import React from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'
import ta from 'time-ago'
import { Link } from 'react-router'
import { secondsToTime } from '../../util'
  
const blue = "#2185D0"
const green = "#21BA45"
const red = "#DB2828"

const ProMatch = ({ match }) => {
  const duration = secondsToTime(match.duration)
  const timeAgo = ta().ago(match.start_time * 1000)

  return (
    <Grid.Row style={{ padding: '5px 0px', borderBottom: '1px solid #444' }}>
      <Grid.Column width={5}>
        <Link to={`/matches/${match.match_id}`} style={{ color: blue }}>{match.match_id} ></Link>
        <div style={{ fontSize: '0.85em', color: '#aaa' }}>{match.league_name}</div>
      </Grid.Column>
      <Grid.Column width={3}>
        <div>{duration}</div>
        <div style={{ fontSize: '0.85em', color: '#aaa' }}>{timeAgo}</div>
      </Grid.Column>
      <Grid.Column width={4}>
        {match.radiant_win && <Icon name="trophy" color="yellow" />}
        <span style={{ color: green }}>{match.radiant_name ? match.radiant_name : '?'}</span>
      </Grid.Column>
      <Grid.Column width={4}>
        {!match.radiant_win && <Icon name="trophy" color="yellow" />}
        <span style={{ color: red }}>{match.dire_name ? match.dire_name : '?'}</span>
      </Grid.Column>
    </Grid.Row>
  )
}

export default ProMatch