import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import CountBar from './CountBar'
import PercentageBar from './PercentageBar'

const BASE_URL = 'https://api.opendota.com'

const HeroRowPublic = ({ hero }) => {
  const { id, localized_name, img } = hero
  const oneKWin = hero['1000_win']
  const oneKPick = hero['1000_pick']
  const twoKWin = hero['2000_win']
  const twoKPick = hero['2000_pick']
  const threeKWin = hero['3000_win']
  const threeKPick = hero['3000_pick']
  const fourKWin = hero['4000_win']
  const fourKPick = hero['4000_pick']
  const fiveKWin = hero['5000_win']
  const fiveKPick = hero['5000_pick']

  return (
    <Grid.Row style={{ padding: '1px', borderTop: '1px solid #ddd' }}>
      <Grid.Column>
        <Image src={BASE_URL + img} style={{ width: '30%', display: 'inline-block' }} />
        <div style={{ display: 'inline-block', verticalAlign: 'inherit', marginLeft: '5px' }}>{localized_name}</div>
      </Grid.Column>
      <Grid.Column>
1
      </Grid.Column>
      <Grid.Column>
2
      </Grid.Column>
      <Grid.Column>
3
      </Grid.Column>
      <Grid.Column>
4
      </Grid.Column>
      <Grid.Column>
5
      </Grid.Column>
    </Grid.Row>
  )
}

export default HeroRowPublic