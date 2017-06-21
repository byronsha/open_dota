import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table'
import ProMatch from './ProMatch'
import Loader from '../Loader'

const styles = {
  headerRow: {
    backgroundColor: 'rgb(38, 38, 52)'
  },
  table: {
    backgroundColor: 'rgb(48, 48, 62)'
  },
  column: {
    width: '20%'
  }
}

class ProMatches extends React.Component {
  render() {
    if (this.props.proMatchesLoading) {
      return <Loader />
    } else {
      return (
        <Table style={styles.table}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow style={styles.headerRow}>
              <TableHeaderColumn>MATCH ID</TableHeaderColumn>
              <TableHeaderColumn style={styles.column}>DURATION</TableHeaderColumn>
              <TableHeaderColumn style={styles.column}>RADIANT</TableHeaderColumn>
              <TableHeaderColumn style={styles.column}>DIRE</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody>
            {this.props.proMatches.map(match => (
              <ProMatch key={match.match_id} match={match} />
            ))}
          </TableBody>
        </Table>
      )
    }
  }
}

export default ProMatches