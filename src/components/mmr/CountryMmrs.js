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
  headerRow: {
    backgroundColor: 'rgb(40, 40, 40)'
  }
}

function renderFlag(country) {
  if (countries.indexOf(country) === -1) {
    return null
  }
  
  return <Flag name={country.toLowerCase()} />
}

const CountryRow = ({ row }) => (
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

const CountryMmrs = ({ mmrDistribution }) => (
  <div>
    <Table>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow style={styles.headerRow}>
          <TableHeaderColumn>Country Name</TableHeaderColumn>
          <TableHeaderColumn>Country Code</TableHeaderColumn>
          <TableHeaderColumn>Players</TableHeaderColumn>
          <TableHeaderColumn>Average MMR</TableHeaderColumn>
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

export default CountryMmrs