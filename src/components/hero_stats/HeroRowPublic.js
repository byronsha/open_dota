import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import CountBar from './CountBar'
import PercentageBar from './PercentageBar'

const BASE_URL = 'https://api.opendota.com'

const HeroRowPublic = ({ hero, max }) => {
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
    <Grid.Row style={{ padding: '0px', borderTop: '1px solid #ddd', margin: '0px 100px' }}>
      <Grid.Column width={1}>
        <Image fluid src={BASE_URL + img} />
      </Grid.Column>
      <Grid.Column width={2}>
        {localized_name}
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <PercentageBar
          width={fiveKWin / fiveKPick * 100}
          height={8}
          text={`${(fiveKWin / fiveKPick * 100).toFixed(2)}%`}
          color="#2185D0"
        />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <CountBar
          width={fiveKPick / max * 100}
          height={8}
          text={`${fiveKPick}`}
          color="#21BA45"
        />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <PercentageBar
          width={fourKWin / fourKPick * 100}
          height={8}
          text={`${(fourKWin / fourKPick * 100).toFixed(2)}%`}
          color="#2185D0"
        />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <CountBar
          width={fourKPick / max * 100}
          height={8}
          text={`${fourKPick}`}
          color="#21BA45"
        />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <PercentageBar
          width={threeKWin / threeKPick * 100}
          height={8}
          text={`${(threeKWin / threeKPick * 100).toFixed(2)}%`}
          color="#2185D0"
        />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <CountBar
          width={threeKPick / max * 100}
          height={8}
          text={`${threeKPick}`}
          color="#21BA45"
        />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <PercentageBar
          width={twoKWin / twoKPick * 100}
          height={8}
          text={`${(twoKWin / twoKPick * 100).toFixed(2)}%`}
          color="#2185D0"
        />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <CountBar
          width={twoKPick / max * 100}
          height={8}
          text={`${twoKPick}`}
          color="#21BA45"
        />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <PercentageBar
          width={oneKWin / oneKPick * 100}
          height={8}
          text={`${(oneKWin / oneKPick * 100).toFixed(2)}%`}
          color="#2185D0"
        />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom">
        <CountBar
          width={oneKPick / max * 100}
          height={8}
          text={`${oneKPick}`}
          color="#21BA45"
        />
      </Grid.Column>
    </Grid.Row>
  )
}

export default HeroRowPublic