import React from 'react'
import { Header, Grid } from 'semantic-ui-react'
import HeroStatsRow from './HeroStatsRow'

class HeroStatsPro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderBy: 'winrate',
      direction: 'asc'
    }
  }
  
  orderHeroStats() {

  }

  render() {
    return (
      <div>
        <Header textAlign="center">Hero statistics for pro games over the last 30 days</Header>

        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={4}>Win %</Grid.Column>
            <Grid.Column width={5}>Pick</Grid.Column>
            <Grid.Column width={4}>Ban</Grid.Column>
          </Grid.Row>

          {this.props.heroStats.map(hero => <HeroStatsRow hero={hero} />)}
        </Grid>

      </div>
    )
  }
}

export default HeroStatsPro