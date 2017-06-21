import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import {Flag} from 'semantic-ui-react' 
import countries from '../../constants/countries'

const styles = {
  header: {
    textAlign: 'center',
    fontSize: '1.5em',
    margin: '50px'
  },
  subheader: {
    color: '#ccc',
    fontSize: '0.65em',
    paddingTop: '8px'
  },
  headerRow: {
    backgroundColor: 'rgb(38, 38, 52)'
  },
  table: {
    backgroundColor: 'rgb(48, 48, 62)'
  },
}

function renderFlag(country) {
  if (countries.indexOf(country) === -1) {
    return null
  }
  return <Flag name={country.toLowerCase()} />
}

function countPlayers(countries) {
  let players = 0
  for (let country of countries) {
    players += country.count
  }
  return players
}

const CountryRow = ({row}) => (
  <TableRow>
    <TableRowColumn>
      {renderFlag(row.common)}
      {row.common}
    </TableRowColumn>
    <TableRowColumn>{row.loccountrycode}</TableRowColumn>
    <TableRowColumn>{row.count.toLocaleString()}</TableRowColumn>
    <TableRowColumn>{row.avg}</TableRowColumn>
  </TableRow>
)

const CountryMmrs = ({mmrDistribution}) => {
  const numPlayers = countPlayers(mmrDistribution.country_mmr.rows)
  const headers = ['Country Name', 'Country Code', 'Players', 'Average MMR']

  return (
    <div>
      <div style={styles.header}>
        Average Solo MMR by Country
        <div style={styles.subheader}>
          {numPlayers.toLocaleString()} players
        </div>
      </div>

      <Table style={styles.table}>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow style={styles.headerRow}>
            {headers.map(header => (
              <TableHeaderColumn key={header}>{header}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody displayRowCheckbox={false}>
          {mmrDistribution.country_mmr.rows.map(row => (
            <CountryRow key={row.loccountrycode} row={row} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default CountryMmrs