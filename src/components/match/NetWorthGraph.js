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
}

const colors = [
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
]

class NetWorthGraph extends React.Component {
  state = {
    value: false
  }
  
  renderHint() {
    const { value } = this.state
    if (!value) { return null }

    return (
      <Crosshair values={[value]}>
        <div className="rv-crosshair__inner__content" style={styles.hint}>
          {this.props.matchDetails.players.map((player, index) => {
            return (
              <div key={player.account_id} style={{ whiteSpace: 'nowrap' }}>
                <div style={{ display: 'inline-block', marginRight: '2px', width: '9px', height: '9px', background: colors[index] }} />
                {player.gold_t[value.x]}
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
          
          {players.map((player, index) => {
            const goldArr = player.gold_t
            const data = goldArr.map((gold, index) => {
              return { x: index, y: gold }
            })

            return (
              <LineMarkSeries
                key={player.account_id}
                data={data}
                size={2}
                color={colors[index]}
                curve={'curveMonotoneX'}
                onNearestX={value => this.setState({ value })}
              />
            )
          })}

          {this.renderHint()}
        </FlexibleXYPlot>
      </div>
    )
  }
}

export default NetWorthGraph