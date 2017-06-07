import React from 'react'
import { Container, Header } from 'semantic-ui-react'
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

const tdStyle = {
  textAlign: 'right',
  paddingLeft: '5px'
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
        <div className="rv-crosshair__inner__content">
          <table style={{ fontSize: '1.1em' }}>
            <tbody>
              <tr>
                <td colSpan="2" style={{ fontWeight: 'bold' }}>{value.x} MMR</td>
              </tr>
              <tr>
                <td>Players</td>
                <td style={tdStyle}>{value.y.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Percentile</td>
                <td style={tdStyle}>{(value.percentile).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Crosshair>
    )
  }

  render() {
    const { mmrDistribution } = this.props
    const blue = "#2185D0"
    const headerStyle = { margin: '60px 0px' }
    const axisStyle = {
      line: { stroke: '#fff' },
      ticks: { stroke: '#fff' },
      title: { stroke: 'none', fill: '#fff' },
      text: { stroke: 'none', fill: '#fff' }
    }
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
      <Container>
        <Header inverted as="h2" textAlign="center" style={headerStyle}>
          Solo MMR Distribution
        </Header>

        <FlexibleXYPlot height={500}>
          <YAxis title="Players" style={axisStyle}/>
          <XAxis title="MMR" style={axisStyle}/>
          
          <VerticalBarSeries
            color="#2185D0"
            data={barData}
            onNearestX={value => this.setState({ value })}
          />
          <LineSeries
            color="orange"
            data={lineData}
          />

          {this.renderHint()}
        </FlexibleXYPlot>

        <div className="legend">
          <span className="legend-key blue"></span>
          Players
          {' '}
          <span className="legend-key orange"></span>
          Percentile
        </div>
      </Container>
    )
  }
}

export default MmrDistribution