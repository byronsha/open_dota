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

  countGames() {
    let count = 0
    for (let hero of this.props.heroStatsPro) {
      if (hero.pro_pick) {
        count += hero.pro_pick
      }
    }
    return count / 10
  }

  render() {
    const max = Math.max(this.getHighestPicks(), this.getHighestBans())
    const headerStyle = {
      margin: '60px 0px'
    }
    const sorterStyle = {
      margin: '0px 100px',
      background: '#1d1d1d',
      borderBottom: '1px solid #444'
    }
    const gameCount = this.countGames()

    return (
      <div>
        <Header inverted as="h2" textAlign="center" style={headerStyle}>
          Hero Stats for Professional Games
          <Header.Subheader>
            {gameCount.toLocaleString()} games over the last 30 days
          </Header.Subheader>
        </Header>

        <Container fluid style={{ marginBottom: '100px' }}>
          <Grid verticalAlign="middle" columns="equal">
            <Grid.Row style={sorterStyle}>
              <SortButtonPro {...this.props} ownOrderBy="name" text="HERO" width={3} />
              <SortButtonPro {...this.props} ownOrderBy="winrate" text="WIN %" />
              <SortButtonPro {...this.props} ownOrderBy="picks" text="PICKS" />
              <SortButtonPro {...this.props} ownOrderBy="bans" text="BANS" />
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