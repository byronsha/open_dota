import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ta from 'time-ago'
import heroes from '../../constants/heroes'

const IMAGE_URL = 'https://api.opendota.com/apps/dota2/images/heroes/'

const PublicMatch = ({ match }) => {
  function renderHeroImage(id) {
    const style = {
      width: '20%',
      display: 'inline-block'
    }
    const heroName = heroes[id].name.replace('npc_dota_hero_', '')
    return <Image style={style} src={`${IMAGE_URL}${heroName}_full.png`} />
  }

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

  const radiant = match.radiant_team.split(',').map(id => renderHeroImage(id))
  const dire = match.dire_team.split(',').map(id => renderHeroImage(id))
  const duration = secondsToTime(match.duration)
  const timeAgo = ta().ago(match.start_time * 1000)

  return (
    <Grid.Row style={{ padding: '10px 0px', borderBottom: '1px solid #444' }}>
      <Grid.Column width={3}>
        <div style={{ fontSize: '0.9em' }}>{match.match_id}</div>
        <div>{match.avg_mmr} MMR</div>
      </Grid.Column>
      <Grid.Column width={3}>
        <div>{duration}</div>
        <div style={{ fontSize: '0.9em' }}>{timeAgo}</div>
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