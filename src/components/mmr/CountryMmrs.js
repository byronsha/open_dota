import React from 'react'
import {
  Container,
  Header,
  Grid,
  Flag
} from 'semantic-ui-react' 
import countries from '../../constants/countries'

const headerStyle = {
  margin: '60px 0px'
}

function renderFlag(country) {
  if (countries.indexOf(country) === -1) {
    return null
  }
  
  return <Flag name={country.toLowerCase()} />
}

const CountryMmrs = ({ mmrDistribution }) => (
  <div>
    <Header inverted as="h2" textAlign="center" style={headerStyle}>
      Average Solo MMR by Country
    </Header>

    <Container style={{ marginBottom: '100px' }}>
      <Grid verticalAlign="middle" columns="equal">
        <Grid.Row className="header-row">
          <Grid.Column width={4}>Country Name</Grid.Column>
          <Grid.Column textAlign="center" width={4}>Country Code</Grid.Column>
          <Grid.Column textAlign="center" width={4}>Players</Grid.Column>
          <Grid.Column textAlign="center" width={4}>Average MMR</Grid.Column>
        </Grid.Row>

        {mmrDistribution.country_mmr.rows.map(row => (
          <Grid.Row key={row.loccountrycode} style={{ borderBottom: '1px solid #444' }}>
            <Grid.Column width={4}>
              {renderFlag(row.common)}
              {row.common}
            </Grid.Column>
            <Grid.Column textAlign="center" width={4}>{row.loccountrycode}</Grid.Column>
            <Grid.Column textAlign="center" width={4}>{row.count.toLocaleString()}</Grid.Column>
            <Grid.Column textAlign="center" width={4}>{row.avg}</Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </Container>
  </div>
)

export default CountryMmrs