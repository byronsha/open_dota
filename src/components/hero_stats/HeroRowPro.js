import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import CountBar from './CountBar'
import PercentageBar from './PercentageBar'

const BASE_URL = 'https://api.opendota.com'

const HeroRowPro = ({ hero, max }) => {
  const { id, localized_name, img, pro_win, pro_pick, pro_ban } = hero
  if (!pro_win || !pro_pick || !pro_ban) { return <div></div> }
  
  return (
    <Grid.Row style={{ padding: '0px', borderTop: '1px solid #444', margin: '0px 100px' }}>
      <Grid.Column width={1}>
        <Image fluid src={BASE_URL + img} />
      </Grid.Column>
      <Grid.Column width={2}>
        {localized_name}
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <PercentageBar
          width={pro_win / pro_pick * 100}
          height={8}
          text={`${(pro_win / pro_pick * 100).toFixed(2)}%`}
          color="#2185D0"
        />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <CountBar
          width={pro_pick / max * 100}
          height={8}
          text={`${pro_pick}`}
          color="#21BA45"
        />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <CountBar
          width={pro_ban / max * 100}
          height={8}
          text={`${pro_ban}`}
          color="#DB2828"
        />
      </Grid.Column>
    </Grid.Row>
  )
}

export default HeroRowPro