import React from 'react'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import {blueA200} from 'material-ui/styles/colors';
import {Link} from 'react-router'
import ta from 'time-ago'
import {secondsToTime} from '../../util'
import heroes from '../../constants/heroes'

const IMAGE_URL = 'https://api.opendota.com/apps/dota2/images/heroes/'

const styles = {
  blue: {
    color: blueA200
  },
  column20: {
    width: '20%'
  },
  column30: {
    width: '30%'
  },
  image: {
    width: '20%',
    display: 'inline-block',
    margin: '2px'
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
      <img
        key={match.match_id + id}
        style={styles.image}
        src={`${IMAGE_URL}${heroName}_full.png`}
      />
    )
  }

  return (
    <TableRow>
      <TableRowColumn style={styles.column20}>
        <Link to={`/matches/${match.match_id}`} style={styles.blue}>{match.match_id} ></Link>
        <div>{match.avg_mmr} MMR</div>
      </TableRowColumn>
      <TableRowColumn style={styles.column20}>
        <div>{duration}</div>
        <div>{timeAgo}</div>
      </TableRowColumn>
      <TableRowColumn>
        {radiant}
      </TableRowColumn>
      <TableRowColumn>
        {dire}
      </TableRowColumn>
    </TableRow>
  )
}

export default PublicMatch