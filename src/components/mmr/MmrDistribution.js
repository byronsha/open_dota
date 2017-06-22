import React from 'react'
import {
  blueA200,
  orange500
} from 'material-ui/styles/colors'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
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
  hint: {
    borderRadius: '0px'
  },
  hintTable: {
    fontSize: '1.1em'
  },
  hintMmr: {
    fontWeight: '500'
  },
  hintData: {
    textAlign: 'right',
    paddingLeft: '10px'
  },
  axis: {
    line: {stroke: '#fff'},
    ticks: {stroke: '#fff'},
    title: {stroke: 'none', fill: '#fff'},
    text: {stroke: 'none', fill: '#fff'}
  },
  legend: {
    width: '100%',
    paddingTop: '20px',
    textAlign: 'center'
  },
  legendKeyBlue: {
    width: '12px',
    height: '12px',
    display: 'inline-block',
    margin: '0px 10px',
    background: blueA200
  },
  legendKeyOrange: {
    width: '12px',
    height: '12px',
    display: 'inline-block',
    margin: '0px 10px',
    background: orange500
  }
}

class MmrDistribution extends React.Component {
  state = {
    value: false
  }

  renderHint() {
    const { value } = this.state
    if (!value) { return null }

    return (
      <Crosshair values={[value]}>
        <div className="rv-crosshair__inner__content" style={styles.hint}>
          <table style={styles.hintTable}>
            <tbody>
              <tr>
                <td colSpan="2" style={styles.hintMmr}>{value.x} MMR</td>
              </tr>
              <tr>
                <td>Players</td>
                <td style={styles.hintData}>{value.y.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Percentile</td>
                <td style={styles.hintData}>{(value.percentile).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Crosshair>
    )
  }

  render() {
    const { mmrDistribution } = this.props
    let barData = []
    let lineData = []
    let totalPlayers = mmrDistribution.mmr.sum.count
    
    for (let row of mmrDistribution.mmr.rows) {
      let { bin_name, count, cumulative_sum } = row
      let percentile = cumulative_sum / totalPlayers * 100

      barData.push({
        x: bin_name,
        y: count,
        percentile
      })

      lineData.push({
        x: bin_name,
        y: percentile * 1000
      })
    }

    return (
      <div style={styles.chartContainer}>
        <div style={styles.header}>
          Solo MMR Distribution
          <div style={styles.subheader}>
            {totalPlayers.toLocaleString()} players
          </div>
        </div>
        
        <FlexibleXYPlot height={500}>
          <YAxis title="Players" style={styles.axis}/>
          <XAxis title="MMR" style={styles.axis}/>
          
          <VerticalBarSeries
            data={barData}
            color={blueA200}
            onNearestX={value => this.setState({ value })}
          />
          <LineMarkSeries
            data={lineData}
            size={2}
            color={orange500}
            curve={'curveMonotoneX'}
          />

          {this.renderHint()}
        </FlexibleXYPlot>

        <div style={styles.legend}>
          <span style={styles.legendKeyBlue}></span>
          Players
          {' '}
          <span style={styles.legendKeyOrange}></span>
          Percentile
        </div>
      </div>
    )
  }
}

export default MmrDistribution