import React from 'react'
import { Header, Grid, Icon } from 'semantic-ui-react'
import HeroStatsRow from './HeroStatsRow'

class HeroStatsPro extends React.Component {
  render() {
    const { proOrderBy, proOrderDirection, proSetOrderBy, proSetOrderDirection } = this.props

    return (
      <div>
        <Header textAlign="center">Hero statistics for pro games over the last 30 days</Header>

        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={4}/>
            
            <Grid.Column
              width={4}
              onClick={() => {
                if (proOrderBy !== 'winrate') {
                  proSetOrderBy('winrate')
                  proSetOrderDirection('desc')
                } else {
                  const direction = proOrderDirection === 'desc' ? 'asc' : 'desc'
                  proSetOrderDirection(direction)
                }
              }}
            >
              <span style={{ fontWeight: proOrderBy === 'winrate' ? 'bold' : 'normal' }}>Win %</span>
              {proOrderBy === 'winrate' && proOrderDirection === 'desc' && <Icon name="long arrow down"/>}
              {proOrderBy === 'winrate' && proOrderDirection === 'asc' && <Icon name="long arrow up"/>}
            </Grid.Column>
            
            <Grid.Column
              width={4}
              onClick={() => {
                if (proOrderBy !== 'picks') {
                  proSetOrderBy('picks')
                  proSetOrderDirection('desc')
                } else {
                  const direction = proOrderDirection === 'desc' ? 'asc' : 'desc'
                  proSetOrderDirection(direction)
                }
              }}
            >
              <span style={{ fontWeight: proOrderBy === 'picks' ? 'bold' : 'normal' }}>Picks</span>
              {proOrderBy === 'picks' && proOrderDirection === 'desc' && <Icon name="long arrow down"/>}
              {proOrderBy === 'picks' && proOrderDirection === 'asc' && <Icon name="long arrow up"/>}
            </Grid.Column>
            
            <Grid.Column
              width={4}
              onClick={() => {
                if (proOrderBy !== 'bans') {
                  proSetOrderBy('bans')
                  proSetOrderDirection('desc')
                } else {
                  const direction = proOrderDirection === 'desc' ? 'asc' : 'desc'
                  proSetOrderDirection(direction)
                }
              }}
            >
              <span style={{ fontWeight: proOrderBy === 'bans' ? 'bold' : 'normal' }}>Bans</span>
              {proOrderBy === 'bans' && proOrderDirection === 'desc' && <Icon name="long arrow down"/>}
              {proOrderBy === 'bans' && proOrderDirection === 'asc' && <Icon name="long arrow up"/>}
            </Grid.Column>
          </Grid.Row>

          {this.props.heroStats.map(hero => <HeroStatsRow key={hero.id} hero={hero} />)}
        </Grid>

      </div>
    )
  }
}

export default HeroStatsPro