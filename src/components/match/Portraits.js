import React from 'react'
import heroes from '../../constants/heroes'
import {Icon} from 'semantic-ui-react'
import {GridList, GridTile} from 'material-ui/GridList';

const IMAGE_URL = 'https://api.opendota.com/apps/dota2/images/heroes/'

const styles = {
  container: {
    paddingTop: '50px'
  },
  gridTile: {
    textAlign: 'center',
    fontFamily: 'Roboto'
  },
  playerName: {
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'ellipsis'
  },
  image: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px'
  }
}

const Portrait = ({player}) => {
  const heroName = heroes[player.hero_id].name.replace('npc_dota_hero_', '')
  const {
    name,
    personaname,
    kills,
    deaths,
    assists,
    total_gold
  } = player

  let playerName = name ? name : personaname

  return (
    <GridTile style={styles.gridTile}>
      <div style={styles.playerName}>{playerName ? playerName : '?'}</div>      
      <img src={`${IMAGE_URL}${heroName}_full.png`} style={styles.image} />
      <div>
        <Icon name="circle" color="yellow" />
        {total_gold.toLocaleString()}
      </div>
      <div>{kills} / {deaths} / {assists}</div>
    </GridTile>
  )
}

const Portraits = ({matchDetails}) => {
  const radiant = matchDetails.players.filter(player => player.player_slot < 100)
  const dire = matchDetails.players.filter(player => player.player_slot > 100)

  return (
    <div style={styles.container}>
      <GridList cols={11}>
        {radiant.map(player => (
          <Portrait key={player.account_id} player={player} />
        ))}

        <GridTile />
        
        {dire.map(player => (
          <Portrait key={player.account_id} player={player} />
        ))}
      </GridList>
    </div>
  )
}

export default Portraits