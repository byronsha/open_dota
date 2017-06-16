import React from 'react'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import {
  blue500,
  blueGrey500,
  green500,
  red500,
  amber500
} from 'material-ui/styles/colors';
import heroes from '../../constants/heroes'
import CountBar from '../CountBar'

const IMAGE_URL = 'https://api.opendota.com/apps/dota2/images/heroes/'

const styles = {
  column: {
    paddingLeft: '8px',
    paddingRight: '8px',
    verticalAlign: 'bottom'
  },
  imageColumn: {
    paddingRight: '0px',
    minWidth: '150px'
  },
  level: {
    color: amber500,
    fontWeight: '500'
  }
}

function renderHeroImage(id) {
  const heroName = heroes[id].name.replace('npc_dota_hero_', '')
  return <img width="100%" src={`${IMAGE_URL}${heroName}_full.png`} />
}

const PlayerRow = ({player, maxes}) => {
  const data = {
    'kills': blue500,
    'deaths': red500,
    'assists': green500,
    'last_hits': blueGrey500,
    'denies': blueGrey500,
    'gold_per_min': blueGrey500,
    'xp_per_min': blueGrey500,
    'hero_damage': blueGrey500,
    'hero_healing': blueGrey500,
    'tower_damage': blueGrey500,
    'total_gold': amber500
  }

  return (
    <TableRow>
      <TableRowColumn style={styles.imageColumn}>
        {renderHeroImage(player.hero_id)}
      </TableRowColumn>
      <TableRowColumn width="15%">
        {player.personaname}
      </TableRowColumn>
      <TableRowColumn style={styles.level}>
        {player.level}
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