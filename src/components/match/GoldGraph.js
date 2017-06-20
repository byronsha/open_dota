import React from 'react'
import {Icon} from 'semantic-ui-react'
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

class GoldGraph extends React.Component {
  state = {
    value: false
  }

  renderHint() {
    const {value} = this.state
    if (!value) { return null }

    return (
      <Crosshair values={[value]}>
        <div className="rv-crosshair__inner__content" style={styles.hint}>
          <Icon name="circle" color="yellow" />
          {value.y.toLocaleString()}
        </div>
      </Crosshair>     
    )
  }

  render() {
    const {matchDetails} = this.props
    const goldArr = matchDetails.radiant_gold_adv

    if (!goldArr) {
      return <div>Gold Graph unavailable for this match</div>
    }
  
    const totalMinutes = goldArr.length - 1
    const data = goldArr.map((gold, index) => {
      return {x: index, y: gold}
    })

    return (
      <div style={styles.chartContainer}>
        <div style={styles.header}>
          Radiant Gold Advantage
          <div style={styles.subheader}>
            Over {totalMinutes} minutes
          </div>
        </div>
        
        <FlexibleXYPlot height={500}>
          <YAxis title="Gold" style={styles.axis}/>
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
          Gold
        </div>
      </div>
    )
  }
}

export default GoldGraph