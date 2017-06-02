import React from 'react'
import { Header, Grid, Container } from 'semantic-ui-react'
import HeroRowPublic from './HeroRowPublic'
import SortButtonPublic from './SortButtonPublic'

class HeroStatsPublic extends React.Component {
  getHighestPicks() {
    let max = 0
    for (let hero of this.props.heroStatsPublic) {
      let newMax = Math.max(
        hero['1000_pick'], hero['2000_pick'], hero['3000_pick'],
        hero['4000_pick'], hero['5000_pick']
      )
      if (newMax > max) { max = newMax }  
    }
    return max
  }

  render() {
    const max = this.getHighestPicks()
    const headerStyle = {
      margin: '60px 0px'
    }
    const sorterStyle = {
      margin: '0px 100px',
      background: '#1d1d1d'
    }

    return (
      <div>
        <Header inverted as="h2" textAlign="center" style={headerStyle}>
          Hero Stats for Public Games
          <Header.Subheader>
            over the last 30 days
          </Header.Subheader>
        </Header>

        <Container fluid>
          <Grid verticalAlign="middle" columns="equal">
            <Grid.Row style={sorterStyle}>
              <SortButtonPublic {...this.props} ownOrderBy="name" text="HERO" width={3} />
              <SortButtonPublic {...this.props} ownOrderBy="5k_winrate" text="5K+ W%" />
              <SortButtonPublic {...this.props} ownOrderBy="5k_picks" text="5K+ P" />
              <SortButtonPublic {...this.props} ownOrderBy="4k_winrate" text="4K+ W%" />
              <SortButtonPublic {...this.props} ownOrderBy="4k_picks" text="4K+ P" />
              <SortButtonPublic {...this.props} ownOrderBy="3k_winrate" text="3K+ W%" />
              <SortButtonPublic {...this.props} ownOrderBy="3k_picks" text="3K+ P" />
              <SortButtonPublic {...this.props} ownOrderBy="2k_winrate" text="2K+ W%" />
              <SortButtonPublic {...this.props} ownOrderBy="2k_picks" text="2K+ P" />
              <SortButtonPublic {...this.props} ownOrderBy="1k_winrate" text="1K+ W%" />
              <SortButtonPublic {...this.props} ownOrderBy="1k_picks" text="1K+ P" />
            </Grid.Row>
            
            {this.props.heroStatsPublic.map(hero => (
              <HeroRowPublic key={hero.id} hero={hero} max={max} />
            ))}
          </Grid>
        </Container>
      </div>
    )
  }
}

export default HeroStatsPublic