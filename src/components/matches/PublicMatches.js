import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table'
import PublicMatch from './PublicMatch'
import Loader from '../Loader'

const styles = {
  headerRow: {
    backgroundColor: 'rgb(38, 38, 52)'
  },
  table: {
    background: 'transparent'
  },
  column20: {
    width: '20%'
  },
  column30: {
    width: '30%'
  }
}

class PublicMatches extends React.Component {
  render() {
    if (this.props.publicMatchesLoading) {
      return <Loader />
    } else {
      return (
        <Table style={styles.table}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow style={styles.headerRow}>
              <TableHeaderColumn style={styles.column20}>MATCH ID</TableHeaderColumn>
              <TableHeaderColumn style={styles.column20}>DURATION</TableHeaderColumn>
              <TableHeaderColumn style={styles.column40}>RADIANT</TableHeaderColumn>
              <TableHeaderColumn style={styles.column40}>DIRE</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody>
            {this.props.publicMatches.map(match => (
              <PublicMatch key={match.match_id} match={match} />
            ))}
          </TableBody>
        </Table>
      )
    }
  }
}

export default PublicMatches