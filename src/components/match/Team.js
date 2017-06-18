import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import {green500, red500} from 'material-ui/styles/colors';
import PlayerRow from './PlayerRow'

const radiantImgUrl = 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2a/Radiant_icon.png?version=9ab15dc8d602efb06c1a95e4d0e274e8'
const direImgUrl = 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/0e/Dire_icon.png?version=61ef19f438bb0575a432a67365755dac'

const styles = {
  container: {
    paddingBottom: '25px'
  },
  headerRow: {
    backgroundColor: 'rgb(40, 40, 40)'
  },
  team: {
    fontFamily: 'Roboto',
    fontSize: '1.5em',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  teamImage: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '2.5%',
    margin: '10px 10px 10px 22px'
  },
  column: {
    paddingLeft: '8px',
    paddingRight: '8px'
  }
}

const headers = [
  'Player','','LVL', 'Items', 'K','D','A','LH',
  'DN','GPM','XPM','HD','HH','TD','G'
]

const Team = ({players, maxes}) => {
  const isRadiant = players[0].player_slot < 100 ? true : false
  const nameStyle = styles.team
  styles.team.color = isRadiant ? green500 : red500
  const imageUrl = isRadiant ? radiantImgUrl : direImgUrl
  
  return (
    <div style={styles.container}>
      <div>
        <img src={imageUrl} style={styles.teamImage} />
        <div style={nameStyle}>{isRadiant ? 'Radiant' : 'Dire'}</div>
      </div>

      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow style={styles.headerRow}>
            {headers.map((header, index) => {
              let width
              if (header === '') {width = '12%'}
              if (header === 'LVL') {width = '3%'}

              return (
                <TableHeaderColumn
                  key={header}
                  width={width}
                  style={index > 1 ? styles.column : null}>
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