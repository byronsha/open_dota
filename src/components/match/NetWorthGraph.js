import React from 'react'
import {Icon} from 'semantic-ui-react'
import {
  blue500,
  teal500,
  purple500,
  yellow500,
  orange500,
  pink500,
  lime500,
  lightBlue500,
  green500,
  brown500
} from 'material-ui/styles/colors'
import {
  XYPlot,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineMarkSeries,
  Crosshair,
  makeWidthFlexible 
} from 'react-vis'
import 'react-vis/dist/styles/plot.scss'
import heroes from '../../constants/heroes'

const IMAGE_URL = 'https://api.opendota.com/apps/dota2/images/heroes/'

const FlexibleXYPlot = makeWidthFlexible(XYPlot)

const styles = {
  chartContainer: {
    paddingLeft: '15px'
  },
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
  axis: {
    line: {stroke: '#fff'},
    ticks: {stroke: '#fff'},
    title: {stroke: 'none', fill: '#fff'},
    text: {stroke: 'none', fill: '#fff'}
  },
  hint: {
    borderRadius: '0px'
  },
  hintRow: {
    whiteSpace: 'nowrap',
    fontSize: '1.1em',
    display: 'flex',
    alignItems: 'center',
    padding: '2px 0px'
  },
  hintColor: {
    height: '25px',
    width: '5px'
  },
  hintImage: {
    height: '25px',
    marginRight: '4px'
  },
  legend: {
    width: '100%',
    paddingTop: '20px',
    textAlign: 'center'
  },
  legendKey: {
    display: 'inline-block',
    margin: '0px 10px'
  },
  legendKeyColor: {
    width: '100%',
    height: '4px'
  }
}

const colors = {
  0: blue500,
  1: teal500,
  2: purple500,
  3: yellow500,
  4: orange500,
  128: pink500,
  129: lime500,
  130: lightBlue500,
  131: green500,
  132: brown500
}

class NetWorthGraph extends React.Component {
  state = {
    value: false
  }
  
  renderHint() {
    const { matchDetails } = this.props
    const { value } = this.state
    if (!value) { return null }
    
    const orderedPlayers = matchDetails.players.slice()
    orderedPlayers.sort((playerA, playerB) => {
      return playerB.gold_t[value.x] - playerA.gold_t[value.x]
    })

    return (
      <Crosshair values={[value]}>
        <div className="rv-crosshair__inner__content" style={styles.hint}>
          {orderedPlayers.map(player => {
            const heroName = heroes[player.hero_id].name.replace('npc_dota_hero_', '')
            const colorStyle = Object.assign({}, styles.hintColor)
            colorStyle.background = colors[player.player_slot]

            return (
              <div key={player.account_id} style={styles.hintRow}>
                <div style={colorStyle} />
                <img style={styles.hintImage} src={`${IMAGE_URL}${heroName}_full.png`} />
                {player.gold_t[value.x].toLocaleString()}
              </div>
            )
          })}
        </div>
      </Crosshair>     
    )
  }

  render () {
    const { players } = this.props.matchDetails
    const totalMinutes = players[0].gold_t.length - 1

    return (
      <div style={styles.chartContainer}>
        <div style={styles.header}>
          Player Net Worth
          <div style={styles.subheader}>
            Over {totalMinutes} minutes
          </div>
        </div>
        
        <FlexibleXYPlot height={500}>
          <YAxis title="Gold" style={styles.axis}/>
          <XAxis title="Minutes" style={styles.axis}/>
          <HorizontalGridLines style={{stroke: '#444'}} />
          
          {players.map(player => {
            const goldArr = player.gold_t
            const data = goldArr.map((gold, index) => {
              return { x: index, y: gold }
            })

            return (
              <LineMarkSeries
                key={player.account_id}
                data={data}
                size={2}
                color={colors[player.player_slot]}
                curve={'curveMonotoneX'}
                onNearestX={value => this.setState({ value })}
              />
            )
          })}

          {this.renderHint()}
        </FlexibleXYPlot>

        <div style={styles.legend}>
          {players.map(player => {
            const heroName = heroes[player.hero_id].name.replace('npc_dota_hero_', '')
            const colorStyle = Object.assign({}, styles.legendKeyColor)
            colorStyle.background = colors[player.player_slot]
            
            return (
              <div key={player.account_id} style={styles.legendKey}>
                <img height="20px" src={`${IMAGE_URL}${heroName}_full.png`} />
                <div style={colorStyle} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default NetWorthGraph