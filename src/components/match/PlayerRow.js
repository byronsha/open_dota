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
    verticalAlign: 'bottom',
    width: 'auto'
  },
  playerColumn: {
    paddingRight: '0px'
  },
  level: {
    fontSize: '0.8em',
    color: amberA700,
    border: `1px solid ${amberA700}`,
    borderRadius: '50%',
    padding: '1px 2px',
    marginRight: '5px'
  },
  localizedName: {
    color: '#ccc',
    fontSize: '0.8em',
    textTransform: 'uppercase'
  },
  items: {
    width: '100%'
  },
  itemsColumn: {
    padding: '0px 8px',
    whiteSpace: 'wrap',
    width: '300px'
  },
  player: {
    display: 'flex',
    alignItems: 'center'
  },
  heroImage: {
    display: 'inline-block',
    height: '100%',
    marginRight: '8px'
  },
  playerName: {
    fontWeight: 500,
    fontSize: '1.1em',
    paddingBottom: '2px'
  }
}

const PlayerRow = ({player, maxes}) => {
  let heroName = heroes[player.hero_id].name.replace('npc_dota_hero_', '')
  let localizedName = heroes[player.hero_id].localized_name

  let data = {
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

  let dataLeft = ['kills', 'deaths', 'assists', 'total_gold']
  let dataRight = ['last_hits', 'denies', 'gold_per_min', 'xp_per_min', 'hero_damage', 'hero_healing']

  let playerName = player.name ? player.name : player.personaname

  return (
    <TableRow>
      <TableRowColumn style={styles.playerColumn}>
        <div style={styles.player}>
          <img style={styles.heroImage} src={`${IMAGE_URL}${heroName}_full.png`} />
          <div>
            <div style={styles.playerName}>{playerName ? playerName : '?'}</div>
            <div>
              <span style={styles.level}>{player.level}</span>
              <span style={styles.localizedName}>{localizedName}</span>
            </div>
          </div>
        </div>
      </TableRowColumn>

      {dataLeft.map(stat => (
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

      <TableRowColumn style={styles.itemsColumn}>
        <PlayerItems
          player={player}
          containerStyle={styles.items}  
        />
      </TableRowColumn>

      {dataRight.map(stat => (
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