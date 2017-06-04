import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react' 
import ProMatch from './ProMatch'
import Loader from '../Loader'

class ProMatches extends React.Component {
  renderMatches() {
    const sorterStyle = {
      background: '#1d1d1d',
      borderBottom: '1px solid #444'
    }

    const columnStyle = {
      fontWeight: 'bold'
    }

    if (this.props.proMatchesLoading) {
      return <Loader />
    } else {
      return (
        <Container style={{ marginBottom: '100px' }}>
          <Grid verticalAlign="middle" columns="equal">
            <Grid.Row style={sorterStyle}>
              <Grid.Column width={5} style={columnStyle}>MATCH ID</Grid.Column>
              <Grid.Column width={3} style={columnStyle}>DURATION</Grid.Column>
              <Grid.Column width={4} style={columnStyle}>RADIANT</Grid.Column>
              <Grid.Column width={4} style={columnStyle}>DIRE</Grid.Column>
            </Grid.Row>

            {this.props.proMatches.map(match => (
              <ProMatch key={match.match_id} match={match} />
            ))}
          </Grid>
        </Container>
      )
    }
  }

  render() {
    const headerStyle = {
      margin: '60px 0px'
    }
    
    return (
      <div>
        <Header inverted as="h2" textAlign="center" style={headerStyle}>
          Pro Matches
        </Header>

        {this.renderMatches()}
      </div>
    )
  }
}

export default ProMatches