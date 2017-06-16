import React from 'react'
import {
  blue500,
  orange500
} from 'material-ui/styles/colors';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  LineSeries,
  Hint,
  Crosshair,
  makeWidthFlexible 
} from 'react-vis'
import 'react-vis/dist/styles/plot.scss'

const FlexibleXYPlot = makeWidthFlexible(XYPlot)

const styles = {
  chartContainer: {
    paddingTop: '50px',
    paddingLeft: '15px'
  },
  hint: {
    borderRadius: '0px',
    fontFamily: 'Roboto'
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
    background: blue500
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
    
    for (let row of mmrDistribution.mmr.rows) {
      let { bin_name, count, cumulative_sum } = row
      let percentile = cumulative_sum / mmrDistribution.mmr.sum.count * 100

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
        <FlexibleXYPlot height={500}>
          <YAxis title="Players" style={styles.axis}/>
          <XAxis title="MMR" style={styles.axis}/>
          
          <VerticalBarSeries
            color={blue500}
            data={barData}
            onNearestX={value => this.setState({ value })}
          />
          <LineSeries
            color={orange500}
            data={lineData}
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