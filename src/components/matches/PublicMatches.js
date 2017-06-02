import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import PublicMatch from './PublicMatch'

class PublicMatches extends React.Component {
  render() {
    const headerStyle = {
      margin: '60px 0px'
    }
    const sorterStyle = {
      background: '#1d1d1d',
      borderBottom: '1px solid #444'
    }
    
    return (
      <div>
        <Header inverted as="h2" textAlign="center" style={headerStyle}>
          Public Matches
        </Header>

        <Container style={{ marginBottom: '100px' }}>
          <Grid verticalAlign="middle" columns="equal">
            <Grid.Row style={sorterStyle}>
              <Grid.Column width={3}>MATCH ID</Grid.Column>
              <Grid.Column width={3}>DURATION</Grid.Column>
              <Grid.Column width={5}>RADIANT</Grid.Column>
              <Grid.Column width={5}>DIRE</Grid.Column>
            </Grid.Row>

            {this.props.publicMatches.map(match => (
              <PublicMatch key={match.id} match={match} />
            ))}
          </Grid>
        </Container>
      </div>
    )
  }
}

export default PublicMatches