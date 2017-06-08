import React from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'
import ta from 'time-ago'
import { Link } from 'react-router'

const ProMatch = ({ match }) => {
  function secondsToTime(num) {
    let secNum = parseInt(num, 10)
    let hours = Math.floor(secNum / 3600)
    let minutes = Math.floor((secNum - (hours * 3600)) / 60)
    let seconds = secNum - (hours * 3600) - (minutes * 60)

    if (hours < 10) { hours = `0${hours}` }
    if (minutes < 10) { minutes = `0${minutes}` }
    if (seconds < 10) { seconds = `0${seconds}` }

    return hours === '00' ? `${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`
  }

  const blue = "#2185D0"
  const green = "#21BA45"
  const red = "#DB2828"

  const duration = secondsToTime(match.duration)
  const timeAgo = ta().ago(match.start_time * 1000)

  return (
    <Grid.Row style={{ padding: '5px 0px', borderBottom: '1px solid #444' }}>
      <Grid.Column width={5}>
        <Link to={`/matches/${match.match_id}`} style={{ color: blue }}>{match.match_id}</Link>
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