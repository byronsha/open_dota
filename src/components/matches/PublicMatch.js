import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router'
import ta from 'time-ago'
import { secondsToTime } from '../../util'
import heroes from '../../constants/heroes'

const blue = "#2185D0"
const IMAGE_URL = 'https://api.opendota.com/apps/dota2/images/heroes/'

const PublicMatch = ({ match }) => {
  const duration = secondsToTime(match.duration)
  const timeAgo = ta().ago(match.start_time * 1000)
  const radiant = match.radiant_team.split(',').map(id => renderHeroImage(id))
  const dire = match.dire_team.split(',').map(id => renderHeroImage(id))
  
  function renderHeroImage(id) {
    const style = {
      width: '20%',
      display: 'inline-block'
    }
    const heroName = heroes[id].name.replace('npc_dota_hero_', '')
    return <Image key={match.match_id + id} style={style} src={`${IMAGE_URL}${heroName}_full.png`} />
  }

  return (
    <Grid.Row style={{ padding: '5px 0px', borderBottom: '1px solid #444' }}>
      <Grid.Column width={3}>
        <Link to={`/matches/${match.match_id}`} style={{ color: blue }}>{match.match_id} ></Link>
        <div style={{ fontSize: '0.85em', color: '#aaa' }}>{match.avg_mmr} MMR</div>
      </Grid.Column>
      <Grid.Column width={3}>
        <div>{duration}</div>
        <div style={{ fontSize: '0.85em', color: '#aaa' }}>{timeAgo}</div>
      </Grid.Column>
      <Grid.Column width={5}>
        {radiant}
      </Grid.Column>
      <Grid.Column width={5}>
        {dire}
      </Grid.Column>
    </Grid.Row>
  )
}

export default PublicMatch