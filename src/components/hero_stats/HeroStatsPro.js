import React from 'react'
import { Header, Grid, Container } from 'semantic-ui-react'
import HeroRowPro from './HeroRowPro'
import SortButtonPro from './SortButtonPro'

class HeroStatsPro extends React.Component {
  getHighestPicks() {
    let max = 0
    for (let hero of this.props.heroStatsPro) {
      if (hero.pro_pick > max) {
        max = hero.pro_pick
      }
    }
    return max
  }

  getHighestBans() {
    let max = 0
    for (let hero of this.props.heroStatsPro) {
      if (hero.pro_ban > max) {
        max = hero.pro_ban
      }
    }
    return max
  }

  render() {
    const max = Math.max(this.getHighestPicks(), this.getHighestBans())

    return (
      <div>
        <Header textAlign="center">Hero statistics for pro games over the last 30 days</Header>

        <Container fluid>
          <Grid verticalAlign="middle" columns="equal">
            <Grid.Row style={{ margin: '0px 100px' }}>
              <SortButtonPro {...this.props} ownOrderBy="name" text="Hero" width={3} />
              <SortButtonPro {...this.props} ownOrderBy="winrate" text="Win %" />
              <SortButtonPro {...this.props} ownOrderBy="picks" text="Picks" />
              <SortButtonPro {...this.props} ownOrderBy="bans" text="Bans" />
            </Grid.Row>

            {this.props.heroStatsPro.map(hero => (
              <HeroRowPro key={hero.id} hero={hero} max={max} />
            ))}
          </Grid>
        </Container>
      </div>
    )
  }
}

export default HeroStatsPro