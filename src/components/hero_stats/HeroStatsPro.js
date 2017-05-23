import React from 'react'
import { Header, Grid, Image } from 'semantic-ui-react'

const BASE_URL = 'https://api.opendota.com'

class HeroStatsPro extends React.Component {
  render() {
    return (
      <div>
        <Header textAlign="center">Hero statistics for public games over the last 30 days</Header>

        <Grid>
          {this.props.heroStats.map(hero => {
            const { id, localized_name, img, icon, pro_win, pro_pick, pro_ban } = hero
            return (
              <Grid.Row>
                <Grid.Column width={2}>
                  <Image src={BASE_URL + img} />
                </Grid.Column>
                <Grid.Column width={2}>{localized_name}</Grid.Column>
                <Grid.Column width={2}>{pro_pick}</Grid.Column>
                <Grid.Column width={2}>{pro_win}</Grid.Column>
              </Grid.Row>
            )
          })}
        </Grid>

      </div>
    )
  }
}

export default HeroStatsPro