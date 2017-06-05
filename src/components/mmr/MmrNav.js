import React from 'react'
import { Link } from 'react-router'
import { Grid, Container } from 'semantic-ui-react'

const containerStyle = {
  paddingTop: '50px',
}

const rowStyle = {
  paddingBottom: '0px',
  textAlign: 'center'
}

const linkStyle = {
  color: 'white',
  display: 'block',
  marginBottom: '10px'
}

const MmrNav = ({ path }) => (
  <Container style={containerStyle}>
    <Grid columns="equal">
      <Grid.Row style={rowStyle}>
        <Grid.Column style={{
          borderBottom: path.indexOf('distribution') !== -1 ? '2px solid #2185D0' : '1px solid #444',
          margin: '0px 10px'
        }}>
          <Link to="/mmr/distribution" style={linkStyle}>Solo MMR Distribution</Link>
        </Grid.Column>
        <Grid.Column style={{
          borderBottom: path.indexOf('countries') !== -1 ? '2px solid #2185D0' : '1px solid #444',
          margin: '0px 10px'
        }}>
          <Link to="/mmr/countries" style={linkStyle}>Solo MMR by Country</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default MmrNav