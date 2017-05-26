import React from 'react'
import { Header, Grid, Container } from 'semantic-ui-react'
import HeroRowPro from './HeroRowPro'
import SortButtonPro from './SortButtonPro'

class HeroStatsPro extends React.Component {
  render() {
    return (
      <div>
        <Header textAlign="center">Hero statistics for pro games over the last 30 days</Header>

        <Container>
          <Grid verticalAlign="middle">
            <Grid.Row>
              <SortButtonPro {...this.props} ownOrderBy="name" text="Hero" width={4} />
              <SortButtonPro {...this.props} ownOrderBy="winrate" text="Win %" width={4} />
              <SortButtonPro {...this.props} ownOrderBy="picks" text="Picks" width={4} />
              <SortButtonPro {...this.props} ownOrderBy="bans" text="Bans" width={4} />
            </Grid.Row>

            {this.props.heroStatsPro.map(hero => (
              <HeroRowPro key={hero.id} hero={hero} />
            ))}
          </Grid>
        </Container>
      </div>
    )
  }
}

export default HeroStatsPro