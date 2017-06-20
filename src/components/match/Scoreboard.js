import React from 'react'
import Team from './Team'

function getMaxes(players) {
  const maxes = {
    'level': 0,
    'kills': 0,
    'deaths': 0,
    'assists': 0,
    'last_hits': 0,
    'denies': 0,
    'gold_per_min': 0,
    'xp_per_min': 0,
    'hero_damage': 0,
    'hero_healing': 0,
    'tower_damage': 0,
    'total_gold': 0
  }

  for (let max of Object.keys(maxes)) {
    for (let player of players) {
      if (player[max] > maxes[max]) {
        maxes[max] = player[max]
      }
    }
  }

  return maxes
}

const Scoreboard = ({matchDetails}) => {
  const radiant = matchDetails.players.filter(player => player.player_slot < 100)
  const dire = matchDetails.players.filter(player => player.player_slot > 100)
  const maxes = getMaxes(matchDetails.players)

  return (
    <div>
      <Team players={radiant} maxes={maxes} />
      <Team players={dire} maxes={maxes} />      
    </div>
  )
}

export default Scoreboard