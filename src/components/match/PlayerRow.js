import React from 'react'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import {
  blueA200,
  blueGrey500,
  greenA700,
  redA700,
  amberA700
} from 'material-ui/styles/colors';
import heroes from '../../constants/heroes'
import CountBar from '../CountBar'
import PlayerItems from './PlayerItems'

const IMAGE_URL = 'https://api.opendota.com/apps/dota2/images/heroes/'

const styles = {
  column: {
    paddingLeft: '8px',
    paddingRight: '8px',
    verticalAlign: 'bottom'
  },
  imageColumn: {
    paddingRight: '0px'
  },
  level: {
    color: amberA700,
    width: '3%',
    paddingLeft: '8px',
    paddingRight: '8px'
  },
  items: {
    width: '100%'
  },
  itemsColumn: {
    padding: '0px 8px',
    whiteSpace: 'wrap'
  }
}

const PlayerRow = ({player, maxes}) => {
  const heroName = heroes[player.hero_id].name.replace('npc_dota_hero_', '')
  const data = {
    'kills': blueA200,
    'deaths': redA700,
    'assists': greenA700,
    'last_hits': blueGrey500,
    'denies': blueGrey500,
    'gold_per_min': blueGrey500,
    'xp_per_min': blueGrey500,
    'hero_damage': blueGrey500,
    'hero_healing': blueGrey500,
    'tower_damage': blueGrey500,
    'total_gold': amberA700
  }

  let playerName = player.name ? player.name : player.personaname

  return (
    <TableRow>
      <TableRowColumn style={styles.imageColumn}>
        <img width="100%" src={`${IMAGE_URL}${heroName}_full.png`} />
      </TableRowColumn>
      <TableRowColumn width="10%">
        {playerName ? playerName : '?'}
      </TableRowColumn>
      <TableRowColumn style={styles.level}>
        {player.level}
      </TableRowColumn>
      <TableRowColumn style={styles.itemsColumn}>
        <PlayerItems
          player={player}
          containerStyle={styles.items}  
        />
      </TableRowColumn>

      {Object.keys(data).map(stat => (
        <TableRowColumn
          key={stat}
          style={styles.column}
        >
          <CountBar
            width={player[stat] / maxes[stat] * 100}
            height={8}
            text={player[stat].toLocaleString()}
            color={data[stat]}
          />
        </TableRowColumn>
      ))}
    </TableRow>
  )
}

export default PlayerRow