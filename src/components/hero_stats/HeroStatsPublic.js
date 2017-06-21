import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableRow
} from 'material-ui/Table'
import HeroRowPublic from './HeroRowPublic'
import SortButtonPublic from './SortButtonPublic'

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
  column22: {
    width: '22%'
  },
  column7p5: {
    width: '7.5%',
    paddingLeft: '0px',
    paddingRight: '18px'
  },
  table: {
    backgroundColor: 'rgb(48, 48, 62)'
  },
  tableScroll: {
    minWidth: '1400px',
    overflowX: 'auto'
  }
}

class HeroStatsPublic extends React.Component {
  getHighestPicks() {
    let max = {
      '1000_pick': 0,
      '2000_pick': 0,
      '3000_pick': 0,
      '4000_pick': 0,
      '5000_pick': 0
    }

    for (let bracket of Object.keys(max)) {
      for (let hero of this.props.heroStatsPublic) {
        if (hero[bracket] > max[bracket]) {
          max[bracket] = hero[bracket]
        }
      }
    }
    return max
  }

  countGames() {
    let count = 0
    for (let hero of this.props.heroStatsPublic) {
      count += hero['1000_pick'] + hero['2000_pick'] + hero['3000_pick'] +
        hero['4000_pick'] + hero['5000_pick']
    }
    return Math.round(count / 10)
  }

  render() {
    const maxes = this.getHighestPicks()
    const gameCount = this.countGames()

    return (
      <div>
        <div style={styles.header}>
          Hero Stats for Public Games
          <div style={styles.subheader}>
            ~{gameCount.toLocaleString()} games over the last 30 days
          </div>
        </div>

        <Table bodyStyle={styles.tableScroll} headerStyle={styles.tableScroll} style={styles.table}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow style={styles.headerRow}>
              <SortButtonPublic {...this.props} ownOrderBy="name" text="HERO" style={styles.column22} />
              <SortButtonPublic {...this.props} ownOrderBy="5k_winrate" text="5K+ W%" style={styles.column7p5} />
              <SortButtonPublic {...this.props} ownOrderBy="5k_picks" text="5K+ P" style={styles.column7p5} />
              <SortButtonPublic {...this.props} ownOrderBy="4k_winrate" text="4K+ W%" style={styles.column7p5} />
              <SortButtonPublic {...this.props} ownOrderBy="4k_picks" text="4K+ P" style={styles.column7p5} />
              <SortButtonPublic {...this.props} ownOrderBy="3k_winrate" text="3K+ W%" style={styles.column7p5} />
              <SortButtonPublic {...this.props} ownOrderBy="3k_picks" text="3K+ P" style={styles.column7p5} />
              <SortButtonPublic {...this.props} ownOrderBy="2k_winrate" text="2K+ W%" style={styles.column7p5} />
              <SortButtonPublic {...this.props} ownOrderBy="2k_picks" text="2K+ P" style={styles.column7p5} />
              <SortButtonPublic {...this.props} ownOrderBy="1k_winrate" text="1K+ W%" style={styles.column7p5} />
              <SortButtonPublic {...this.props} ownOrderBy="1k_picks" text="1K+ P" style={styles.column7p5} />
            </TableRow>
          </TableHeader>

          <TableBody>
            {this.props.heroStatsPublic.map(hero => (
              <HeroRowPublic key={hero.id} hero={hero} maxes={maxes} />
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default HeroStatsPublic