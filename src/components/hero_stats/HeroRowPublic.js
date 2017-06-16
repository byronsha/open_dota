import React from 'react'
import {TableRow, TableRowColumn} from 'material-ui/Table'
import {
  blue500,
  green500
} from 'material-ui/styles/colors';
import CountBar from './CountBar'
import PercentageBar from './PercentageBar'

const BASE_URL = 'https://api.opendota.com'

const styles = {
  column10: {
    width: '10%'
  },
  column15: {
    paddingLeft: '0px',
    width: '15%'
  },
  column7p5: {
    width: '7.5%',
    paddingLeft: '0px',
    verticalAlign: 'bottom'
  },
  image: {
    width: '95%',
    marginTop: '2px',
    marginBottom: '2px'
  }
}

const HeroRowPublic = ({ hero, maxes }) => {
  const { id, localized_name, img } = hero
  const oneKWin = hero['1000_win']
  const oneKPick = hero['1000_pick']
  const oneKMax = maxes['1000_pick']
  const twoKWin = hero['2000_win']
  const twoKPick = hero['2000_pick']
  const twoKMax = maxes['2000_pick']  
  const threeKWin = hero['3000_win']
  const threeKPick = hero['3000_pick']
  const threeKMax = maxes['3000_pick']  
  const fourKWin = hero['4000_win']
  const fourKPick = hero['4000_pick']
  const fourKMax = maxes['4000_pick']  
  const fiveKWin = hero['5000_win']
  const fiveKPick = hero['5000_pick']
  const fiveKMax = maxes['5000_pick']  

  return (
    <TableRow>
      <TableRowColumn style={styles.column10}>
        <img src={BASE_URL + img} style={styles.image} />
      </TableRowColumn>
      <TableRowColumn style={styles.column15}>
        {localized_name}
      </TableRowColumn>
      <TableRowColumn style={styles.column7p5}>
        <PercentageBar
          width={fiveKWin / fiveKPick * 100}
          height={8}
          text={`${(fiveKWin / fiveKPick * 100).toFixed(2)}%`}
          color={blue500}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column7p5}>
        <CountBar
          width={fiveKPick / fiveKMax * 100}
          height={8}
          text={fiveKPick.toLocaleString()}
          color={green500}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column7p5}>
        <PercentageBar
          width={fourKWin / fourKPick * 100}
          height={8}
          text={`${(fourKWin / fourKPick * 100).toFixed(2)}%`}
          color={blue500}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column7p5}>
        <CountBar
          width={fourKPick / fourKMax * 100}
          height={8}
          text={fourKPick.toLocaleString()}
          color={green500}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column7p5}>
        <PercentageBar
          width={threeKWin / threeKPick * 100}
          height={8}
          text={`${(threeKWin / threeKPick * 100).toFixed(2)}%`}
          color={blue500}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column7p5}>
        <CountBar
          width={threeKPick / threeKMax * 100}
          height={8}
          text={threeKPick.toLocaleString()}
          color={green500}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column7p5}>
        <PercentageBar
          width={twoKWin / twoKPick * 100}
          height={8}
          text={`${(twoKWin / twoKPick * 100).toFixed(2)}%`}
          color={blue500}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column7p5}>
        <CountBar
          width={twoKPick / twoKMax * 100}
          height={8}
          text={twoKPick.toLocaleString()}
          color={green500}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column7p5}>
        <PercentageBar
          width={oneKWin / oneKPick * 100}
          height={8}
          text={`${(oneKWin / oneKPick * 100).toFixed(2)}%`}
          color={blue500}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column7p5}>
        <CountBar
          width={oneKPick / oneKMax * 100}
          height={8}
          text={oneKPick.toLocaleString()}
          color={green500}
        />
      </TableRowColumn>
    </TableRow>
  )
}

export default HeroRowPublic