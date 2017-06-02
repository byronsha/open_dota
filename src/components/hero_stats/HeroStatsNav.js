import React from 'react'
import { Link } from 'react-router'
import { Grid, Container } from 'semantic-ui-react'

const containerStyle = {
  paddingTop: '50px',
}

const rowStyle = {
  margin: '0px 100px',
  paddingBottom: '0px',
  textAlign: 'center'
}

const linkStyle = {
  color: 'white',
  display: 'block',
  marginBottom: '10px'
}

const HeroStatsNav = ({ path }) => (
  <Container fluid style={containerStyle}>
    <Grid columns="equal">
      <Grid.Row style={rowStyle}>
        <Grid.Column style={{
          borderBottom: path.indexOf('pro') !== -1 ? '2px solid #2185D0' : '1px solid #444',
          margin: '0px 10px'
        }}>
          <Link to="/hero_stats/pro" style={linkStyle}>Pro</Link>
        </Grid.Column>
        <Grid.Column style={{
          borderBottom: path.indexOf('public') !== -1 ? '2px solid #2185D0' : '1px solid #444',
          margin: '0px 10px'
        }}>
          <Link to="/hero_stats/public" style={linkStyle}>Public</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default HeroStatsNav