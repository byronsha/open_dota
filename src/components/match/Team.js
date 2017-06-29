import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import {
  greenA700,
  redA700
} from 'material-ui/styles/colors'
import PlayerRow from './PlayerRow'

const radiantImgUrl = 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2a/Radiant_icon.png?version=9ab15dc8d602efb06c1a95e4d0e274e8'
const direImgUrl = 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/0e/Dire_icon.png?version=61ef19f438bb0575a432a67365755dac'

const styles = {
  container: {
    paddingTop: '65px'
  },
  headerRow: {
    backgroundColor: 'rgb(38, 38, 52)'
  },
  team: {
    fontSize: '1.5em',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  teamImage: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '30px',
    marginRight: '10px'
  },
  column: {
    paddingLeft: '8px',
    paddingRight: '8px'
  },
  table: {
    backgroundColor: 'transparent'
  },
  tableScroll: {
    minWidth: '1200px',
    overflowX: 'auto'
  }
}

const headers = [
  'K','D','A', 'G', 'Items', 'LH',
  'DN','GPM','XPM','HD','HH'
]

const Team = ({ players, maxes }) => {
  const isRadiant = players[0].player_slot < 100 ? true : false
  const nameStyle = styles.team
  styles.team.color = isRadiant ? greenA700 : redA700
  const imageUrl = isRadiant ? radiantImgUrl : direImgUrl
  
  return (
    <div className="scoreboard" style={styles.container}>
      <Table
        style={styles.table}
        bodyStyle={styles.tableScroll}
        headerStyle={styles.tableScroll}
      >
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow style={styles.headerRow}>
            <TableHeaderColumn>
              <img src={imageUrl} style={styles.teamImage} />
              <div style={nameStyle}>{isRadiant ? 'Radiant' : 'Dire'}</div>
            </TableHeaderColumn>

            {headers.map((header, index) => {
              let width = 'auto'
              let columnStyle = Object.assign({}, styles.column)
              if (header === 'Items') {
                width = '300px'
              }

              return (
                <TableHeaderColumn
                  key={header}
                  width={width}
                  style={columnStyle}>
                  {header}
                </TableHeaderColumn>
              )
            })}
          </TableRow>
        </TableHeader>

        <TableBody>
          {players.map(player => (
            <PlayerRow
              key={player.match_id + player.player_slot}
              player={player}
              maxes={maxes}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Team