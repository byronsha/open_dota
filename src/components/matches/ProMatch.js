import React from 'react'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import {
  blueA200,
  greenA700,
  redA700
} from 'material-ui/styles/colors';
import {Icon} from 'semantic-ui-react'
import ta from 'time-ago'
import {Link} from 'react-router'
import {secondsToTime} from '../../util'
  
const styles = {
  blue: {
    color: blueA200
  },
  green: {
    color: greenA700
  },
  red: {
    color: redA700
  },
  column: {
    width: '20%'
  },
  striped: {
    backgroundColor: 'rgb(58, 58, 72)'
  }
}

const ProMatch = ({ match }) => {
  let {
    duration,
    start_time,
    match_id,
    league_name,
    radiant_win,
    radiant_name,
    dire_name
  } = match

  const timeDuration = secondsToTime(duration)
  const timeAgo = ta().ago(start_time * 1000)

  return (
    <TableRow >
      <TableRowColumn>
        <Link to={`/matches/${match_id}`} style={styles.blue}>
          {match_id} >
        </Link>
        <div>{league_name}</div>
      </TableRowColumn>

      <TableRowColumn style={styles.column}>
        <div>{timeDuration}</div>
        <div>{timeAgo}</div>
      </TableRowColumn>

      <TableRowColumn style={styles.column}>
        {radiant_win &&
          <Icon name="trophy" color="yellow" />
        }
        <span style={styles.green}>
          {radiant_name ? radiant_name : '?'}
        </span>
      </TableRowColumn>

      <TableRowColumn style={styles.column}>
        {!radiant_win &&
          <Icon name="trophy" color="yellow" />
        }
        <span style={styles.red}>
          {dire_name ? dire_name : '?'}
        </span>
      </TableRowColumn>
    </TableRow>
  )
}

export default ProMatch