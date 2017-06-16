import React from 'react'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import {blue500} from 'material-ui/styles/colors';
import {Link} from 'react-router'
import ta from 'time-ago'
import {secondsToTime} from '../../util'
import heroes from '../../constants/heroes'

const IMAGE_URL = 'https://api.opendota.com/apps/dota2/images/heroes/'

const styles = {
  subText: {
    fontSize: '0.9em',
    color: '#ccc'
  },
  blue: {
    color: blue500
  },
  column20: {
    width: '20%'
  },
  column30: {
    width: '30%'
  },
  imageContainer: {
    width: '20%',
    padding: '2px',
    display: 'inline-block'
  },
  image: {
    width: '100%'
  }
}

const PublicMatch = ({ match }) => {
  const duration = secondsToTime(match.duration)
  const timeAgo = ta().ago(match.start_time * 1000)
  const radiant = match.radiant_team.split(',').map(id => renderHeroImage(id))
  const dire = match.dire_team.split(',').map(id => renderHeroImage(id))
  
  function renderHeroImage(id) {
    const heroName = heroes[id].name.replace('npc_dota_hero_', '')

    return (
      <div style={styles.imageContainer}>
        <img
          style={styles.image}
          key={match.match_id + id}
          src={`${IMAGE_URL}${heroName}_full.png`}
        />
      </div>
    )
  }

  return (
    <TableRow>
      <TableRowColumn style={styles.column20}>
        <Link to={`/matches/${match.match_id}`} style={styles.blue}>{match.match_id} ></Link>
        <div style={styles.subText}>{match.avg_mmr} MMR</div>
      </TableRowColumn>
      <TableRowColumn style={styles.column20}>
        <div>{duration}</div>
        <div style={styles.subText}>{timeAgo}</div>
      </TableRowColumn>
      <TableRowColumn style={styles.column30}>
        {radiant}
      </TableRowColumn>
      <TableRowColumn style={styles.column30}>
        {dire}
      </TableRowColumn>
    </TableRow>
  )
}

export default PublicMatch