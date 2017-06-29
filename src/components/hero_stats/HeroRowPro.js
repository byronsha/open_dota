import React from 'react'
import {TableRow, TableRowColumn} from 'material-ui/Table'
import {
  blueA200,
  greenA700,
  redA700
} from 'material-ui/styles/colors';
import CountBar from '../CountBar'
import PercentageBar from '../PercentageBar'

const BASE_URL = 'https://api.opendota.com'

const styles = {
  column8: {
    width: '8%'
  },
  column17: {
    paddingLeft: '0px',
    width: '17%'
  },
  column25: {
    width: '25%',
    verticalAlign: 'bottom'
  },
  image: {
    maxWidth: '85px'
  }
}

const HeroRowPro = ({ hero, max }) => {
  const { id, localized_name, img, pro_win, pro_pick, pro_ban } = hero
  if (!pro_win || !pro_pick || !pro_ban) { return null }
  
  return (
    <TableRow>
      <TableRowColumn style={styles.column8}>
        <img src={BASE_URL + img} style={styles.image} />
      </TableRowColumn>
      <TableRowColumn style={styles.column17}>
        {localized_name}
      </TableRowColumn>
      <TableRowColumn style={styles.column25}>
        <PercentageBar
          width={pro_win / pro_pick * 100}
          height={8}
          text={`${(pro_win / pro_pick * 100).toFixed(2)}%`}
          color={blueA200}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column25}>
        <CountBar
          width={pro_pick / max * 100}
          height={8}
          text={pro_pick.toLocaleString()}
          color={greenA700}
        />
      </TableRowColumn>
      <TableRowColumn style={styles.column25}>
        <CountBar
          width={pro_ban / max * 100}
          height={8}
          text={pro_ban.toLocaleString()}
          color={redA700}
        />
      </TableRowColumn>
    </TableRow>
  )
}

export default HeroRowPro