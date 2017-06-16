import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableRow
} from 'material-ui/Table'
import HeroRowPro from './HeroRowPro'
import SortButtonPro from './SortButtonPro'

const styles = {
  header: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '1.5em',
    margin: '50px'
  },
  subheader: {
    color: '#ccc',
    fontSize: '0.65em',
    paddingTop: '8px'
  },
  headerRow: {
    backgroundColor: 'rgb(40, 40, 40)'
  },
  column25: {
    width: '25%'
  }
}

class HeroStatsPro extends React.Component {
  getHighestPicks() {
    let max = 0
    for (let hero of this.props.heroStatsPro) {
      if (hero.pro_pick > max) {
        max = hero.pro_pick
      }
    }
    return max
  }

  getHighestBans() {
    let max = 0
    for (let hero of this.props.heroStatsPro) {
      if (hero.pro_ban > max) {
        max = hero.pro_ban
      }
    }
    return max
  }

  countGames() {
    let count = 0
    for (let hero of this.props.heroStatsPro) {
      if (hero.pro_pick) {
        count += hero.pro_pick
      }
    }
    return count / 10
  }

  render() {
    const max = Math.max(this.getHighestPicks(), this.getHighestBans())
    const gameCount = this.countGames()

    return (
      <div>
        <div style={styles.header}>
          Hero Stats for Professional Games
          <div style={styles.subheader}>
            {gameCount.toLocaleString()} games over the last 30 days
          </div>
        </div>

        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow style={styles.headerRow}>
              <SortButtonPro {...this.props} ownOrderBy="name" text="HERO" style={styles.column25} />
              <SortButtonPro {...this.props} ownOrderBy="winrate" text="WIN %" style={styles.column25} />
              <SortButtonPro {...this.props} ownOrderBy="picks" text="PICKS" style={styles.column25} />
              <SortButtonPro {...this.props} ownOrderBy="bans" text="BANS" style={styles.column25} />
            </TableRow>
          </TableHeader>

          <TableBody>
            {this.props.heroStatsPro.map(hero => (
              <HeroRowPro key={hero.id} hero={hero} max={max} />
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default HeroStatsPro