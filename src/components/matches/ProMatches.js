import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react' 
import ProMatch from './ProMatch'
import Loader from '../Loader'

const headerStyle = {
  margin: '60px 0px'
}

class ProMatches extends React.Component {
  renderMatches() {

    if (this.props.proMatchesLoading) {
      return <Loader />
    } else {
      return (
        <Container style={{ marginBottom: '100px' }}>
          <Grid verticalAlign="middle" columns="equal">
            <Grid.Row className="header-row">
              <Grid.Column width={5}>MATCH ID</Grid.Column>
              <Grid.Column width={3}>DURATION</Grid.Column>
              <Grid.Column width={4}>RADIANT</Grid.Column>
              <Grid.Column width={4}>DIRE</Grid.Column>
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