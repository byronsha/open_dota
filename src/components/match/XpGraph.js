import React from 'react'
import {
  orange500,
  green500,
  red500
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
    borderRadius: '0px',
    fontSize: '1.1em',
    whiteSpace: 'nowrap'
  },
  legend: {
    width: '100%',
    paddingTop: '20px',
    textAlign: 'center'
  },
  legendKeyOrange: {
    width: '12px',
    height: '12px',
    display: 'inline-block',
    margin: '0px 10px',
    background: orange500
  }
}

class XpGraph extends React.Component {
  state = {
    value: false
  }

  renderHint() {
    const {value} = this.state
    if (!value) { return null }

    return (
      <Crosshair values={[value]}>
        <div className="rv-crosshair__inner__content" style={styles.hint}>
          {value.y.toLocaleString()} XP
        </div>
      </Crosshair>     
    )
  }

  render() {
    const {matchDetails} = this.props
    const xpArr = matchDetails.radiant_xp_adv

    if (!xpArr) {
      return <div>Experience Graph unavailable for this match</div>
    }
  
    const totalMinutes = xpArr.length - 1
    const data = xpArr.map((exp, index) => {
      return {x: index, y: exp}
    })

    return (
      <div style={styles.chartContainer}>
        <div style={styles.header}>
          Radiant Experience Advantage
          <div style={styles.subheader}>
            Over {totalMinutes} minutes
          </div>
        </div>
        
        <FlexibleXYPlot height={500}>
          <YAxis title="Experience" style={styles.axis}/>
          <XAxis title="Minutes" style={styles.axis}/>
          <HorizontalGridLines style={{stroke: '#444'}} />
          
          <LineMarkSeries
            color={orange500}
            data={data}
            size={2}
            curve={'curveMonotoneX'}
            onNearestX={value => this.setState({ value })}
          />

          {this.renderHint()}
        </FlexibleXYPlot>

        <div style={styles.legend}>
          <span style={styles.legendKeyOrange}></span>
          Experience
        </div>
      </div>
    )
  }
}
export default XpGraph