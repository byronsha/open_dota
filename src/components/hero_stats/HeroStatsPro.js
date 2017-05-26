import React from 'react'
import { Header, Grid, Icon } from 'semantic-ui-react'
import HeroStatsRow from './HeroStatsRow'
import SortButtonPro from './SortButtonPro'

class HeroStatsPro extends React.Component {
  render() {
    const { proOrderBy, proOrderDirection, proSetOrderBy, proSetOrderDirection } = this.props

    return (
      <div>
        <Header textAlign="center">Hero statistics for pro games over the last 30 days</Header>

        <Grid verticalAlign="middle">
          <Grid.Row>
            <SortButtonPro {...this.props} ownOrderBy="name" text="Hero" width={4} />
            <SortButtonPro {...this.props} ownOrderBy="winrate" text="Win %" width={4} />
            <SortButtonPro {...this.props} ownOrderBy="picks" text="Picks" width={4} />
            <SortButtonPro {...this.props} ownOrderBy="bans" text="Bans" width={4} />
          </Grid.Row>

          {this.props.heroStats.map(hero => <HeroStatsRow key={hero.id} hero={hero} />)}
        </Grid>

      </div>
    )
  }
}

export default HeroStatsPro