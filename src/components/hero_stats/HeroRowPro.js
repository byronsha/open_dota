import React from 'react'
import {TableRow, TableRowColumn} from 'material-ui/Table'
import {
  blue500,
  green500,
  red500
} from 'material-ui/styles/colors';
import CountBar from './CountBar'
import PercentageBar from './PercentageBar'

const BASE_URL = 'https://api.opendota.com'

function getStyles() {
  return {
    column10: {
      width: '10%'
    },
    column15: {
      width: '15%'
    },
    column25: {
      width: '25%',
      verticalAlign: 'bottom'
    },
    image: {
      width: '95%',
      marginTop: '2px',
      marginBottom: '2px'
    }
  }
}

const HeroRowPro = ({ hero, max }) => {
  const styles = getStyles()
  
  const { id, localized_name, img, pro_win, pro_pick, pro_ban } = hero
  if (!pro_win || !pro_pick || !pro_ban) { return null }
  
  return (
    <TableRow>
      <TableRowColumn style={styles.column10}>
        <img src={BASE_URL + img} style={styles.image} />
      </TableRowColumn>
      <TableRowColumn style={styles.column15}>
        {localized_name}
      </TableRowColumn>
      <TableRowColumn style={styles.column25}>
        <PercentageBar
          width={pro_win / pro_pick * 100}
          height={8}
          text={`${(pro_win / pro_pick * 100).toFixed(2)}%`}
          color={blue500}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column25}>
        <CountBar
          width={pro_pick / max * 100}
          height={8}
          text={pro_pick.toLocaleString()}
          color={green500}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column25}>
        <CountBar
          width={pro_ban / max * 100}
          height={8}
          text={pro_ban.toLocaleString()}
          color={red500}
        />
      </TableRowColumn>
    </TableRow>
  )
}

export default HeroRowPro