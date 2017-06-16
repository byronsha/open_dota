import React from 'react'
import heroes from '../../constants/heroes'
import { Grid, Image } from 'semantic-ui-react'

const IMAGE_URL = 'https://api.opendota.com/apps/dota2/images/heroes/'
const radiantImgUrl = 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2a/Radiant_icon.png?version=9ab15dc8d602efb06c1a95e4d0e274e8'
const direImgUrl = 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/0e/Dire_icon.png?version=61ef19f438bb0575a432a67365755dac'

const imgStyle = {
  display: 'inline-block',
  width: '2%',
  marginRight: '5px'
}

function renderHeroImage(id) {
  const heroName = heroes[id].name.replace('npc_dota_hero_', '')
  return <Image src={`${IMAGE_URL}${heroName}_full.png`} />
}

const PlayerRow = ({ player }) => (
  <Grid.Row style={{ padding: '0px', margin: '0px 200px', borderBottom: '1px solid #444' }}>
    <Grid.Column>
      {renderHeroImage(player.hero_id)}
    </Grid.Column>
    <Grid.Column width={3}>
      <div style={{ display: 'inline-block' }}>{player.personaname}</div>
    </Grid.Column>
    <Grid.Column>{player.level}</Grid.Column>
    <Grid.Column>{player.kills}</Grid.Column>
    <Grid.Column>{player.deaths}</Grid.Column>
    <Grid.Column>{player.assists}</Grid.Column>
    <Grid.Column>{player.last_hits}</Grid.Column>
    <Grid.Column>{player.denies}</Grid.Column>
    <Grid.Column>{player.gold_per_min}</Grid.Column>
    <Grid.Column>{player.xp_per_min}</Grid.Column>
    <Grid.Column>{player.hero_damage}</Grid.Column>
    <Grid.Column>{player.hero_healing}</Grid.Column>
    <Grid.Column>{player.tower_damage}</Grid.Column>
    <Grid.Column>{player.total_gold}</Grid.Column>
  </Grid.Row>
)

const HeaderRow = () => (
  <Grid.Row className="header-row" style={{ margin: '0px 200px' }}>
    <Grid.Column>Player</Grid.Column>
    <Grid.Column width={3}></Grid.Column>
    <Grid.Column>LVL</Grid.Column>
    <Grid.Column>K</Grid.Column>
    <Grid.Column>D</Grid.Column>
    <Grid.Column>A</Grid.Column>
    <Grid.Column>LH</Grid.Column>
    <Grid.Column>DN</Grid.Column>
    <Grid.Column>GPM</Grid.Column>
    <Grid.Column>XPM</Grid.Column>
    <Grid.Column>HD</Grid.Column>
    <Grid.Column>HH</Grid.Column>
    <Grid.Column>TD</Grid.Column>
    <Grid.Column>G</Grid.Column>
  </Grid.Row>
)

const MatchDetails = ({ matchDetails }) => {
  const radiant = matchDetails.players.filter(player => player.player_slot < 100)
  const dire = matchDetails.players.filter(player => player.player_slot > 100)

  return (
    <Grid verticalAlign="middle">
      <Grid.Row style={{ margin: '0px 200px' }}>
        <Grid.Column>
          <h3><Image shape="circular" src={radiantImgUrl} style={imgStyle} /> Radiant</h3>
        </Grid.Column>
      </Grid.Row>
      <HeaderRow />
      {radiant.map(player => <PlayerRow key={player.match_id + player.player_slot} player={player} />)}

      <Grid.Row style={{ margin: '0px 200px' }}>
        <Grid.Column>
          <h3><Image shape="circular" src={direImgUrl} style={imgStyle} /> Dire</h3>
        </Grid.Column>
      </Grid.Row>
      <HeaderRow />      
      {dire.map(player => <PlayerRow key={player.match_id + player.player_slot} player={player} />)}
    </Grid>
  )
}

export default MatchDetails