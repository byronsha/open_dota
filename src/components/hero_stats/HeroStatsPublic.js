import React from 'react'
import { Header, Grid, Container } from 'semantic-ui-react'
import HeroRowPublic from './HeroRowPublic'

class HeroStatsPublic extends React.Component {
  render() {
    return (
      <div>
        <Header textAlign="center">Hero statistics for public games over the last 30 days</Header>

        <Container>
          <Grid verticalAlign="middle" columns={6}>
            
            {this.props.heroStatsPublic.map(hero => (
              <HeroRowPublic key={hero.id} hero={hero} />
            ))}
          </Grid>
        </Container>
      </div>
    )
  }
}

export default HeroStatsPublic