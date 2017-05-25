import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import HorizontalBar from './HorizontalBar'

const BASE_URL = 'https://api.opendota.com'

const HeroStatsRow = ({ hero }) => {
  const { id, localized_name, img, pro_win, pro_pick, pro_ban } = hero
  if (!pro_win || !pro_pick || !pro_ban) { return <div></div> }
  
  return (
    <Grid.Row key={id} style={{ padding: '1px' }}>
      <Grid.Column width={1}>
        <Image src={BASE_URL + img} />
      </Grid.Column>
      <Grid.Column width={2}>{localized_name}</Grid.Column>
      <Grid.Column width={4}>
        <HorizontalBar
          width={pro_win / pro_pick * 100 * 2}
          height={8}
          text={`${(pro_win / pro_pick * 100).toFixed(2)} WIN %`}
          color="#2185D0"
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <HorizontalBar
          width={pro_pick / 3}
          height={8}
          text={`${pro_pick} PICKS`}
          color="#21BA45"
        />
      </Grid.Column>
      <Grid.Column width={4}>
        <HorizontalBar
          width={pro_ban / 3}
          height={8}
          text={`${pro_ban} BANS`}
          color="#DB2828"
        />
      </Grid.Column>
    </Grid.Row>
  )
}

export default HeroStatsRow