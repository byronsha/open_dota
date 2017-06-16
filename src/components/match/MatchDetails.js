import React from 'react'
import ta from 'time-ago'
import {secondsToTime} from '../../util'
import {GridList, GridTile} from 'material-ui/GridList';
import {green500, red500} from 'material-ui/styles/colors';

const styles = {
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  radiant: {
    fontSize: '2em',
    color: green500,
    width: '35%',
    textAlign: 'left',
  },
  radiantScore: {
    width: '10%',
    fontSize: '4em',
    color: green500,
  },
  details: {
    width: '10%',
    textTransform: 'uppercase'
  },
  direScore: {
    width: '10%',
    fontSize: '4em',
    color: red500,
  },
  dire: {
    fontSize: '2em',
    color: red500,
    width: '35%',
    textAlign: 'right'
  },
  gameType: {
    paddingBottom: '10px'
  },
  subText: {
    fontSize: '0.8em',
    color: 'ccc'
  },
  duration: {
    fontSize: '1.5em',
    fontWeight: '500',
    paddingBottom: '10px'
  }
}

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
  const date = new Date(start_time * 1000)

  return (
    <div style={styles.container}>
      <div style={styles.radiant}>
        {radiant_win && <span>Radiant Victory</span>}
      </div>
      <div style={styles.radiantScore}>
        {radiant_score}
      </div>
      <div style={styles.details}>
        <div style={styles.gameType}>All Pick</div>
        <div style={styles.subText}>Duration</div>
        <div style={styles.duration}>{durationTime}</div>
        <div style={styles.subText}>Match ID {match_id}</div>
        <div style={styles.subText}>
          {date.toLocaleDateString()} {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
      </div>
      <div style={styles.direScore}>
        {dire_score}
      </div>
      <div style={styles.dire}>
        {!radiant_win && <span>Dire Victory</span>}        
      </div>
    </div>
  )
}

export default MatchDetails