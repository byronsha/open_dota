import React from 'react'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import {
  blue500,
  green500,
  red500
} from 'material-ui/styles/colors';
import {Icon} from 'semantic-ui-react'
import ta from 'time-ago'
import {Link} from 'react-router'
import {secondsToTime} from '../../util'
  
const styles = {
  subText: {
    fontSize: '0.9em',
    color: '#ccc'
  },
  blue: {
    color: blue500
  },
  green: {
    color: green500
  },
  red: {
    color: red500
  },
  column: {
    width: '20%'
  }
}

const ProMatch = ({ match }) => {
  const duration = secondsToTime(match.duration)
  const timeAgo = ta().ago(match.start_time * 1000)

  return (
    <TableRow>
      <TableRowColumn>
        <Link to={`/matches/${match.match_id}`} style={styles.blue}>{match.match_id} ></Link>
        <div style={styles.subText}>{match.league_name}</div>
      </TableRowColumn>
      <TableRowColumn style={styles.column}>
        <div>{duration}</div>
        <div style={styles.subText}>{timeAgo}</div>
      </TableRowColumn>
      <TableRowColumn style={styles.column}>
        {match.radiant_win && <Icon name="trophy" color="yellow" />}
        <span style={styles.green}>{match.radiant_name ? match.radiant_name : '?'}</span>
      </TableRowColumn>
      <TableRowColumn style={styles.column}>
        {!match.radiant_win && <Icon name="trophy" color="yellow" />}
        <span style={styles.red}>{match.dire_name ? match.dire_name : '?'}</span>
      </TableRowColumn>
    </TableRow>
  )
}

export default ProMatch