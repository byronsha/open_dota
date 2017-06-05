import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { XYPlot, XAxis, YAxis, VerticalBarSeries, LineSeries, LabelSeries, Hint, makeWidthFlexible } from 'react-vis'
import 'react-vis/dist/styles/plot.scss'

const FlexibleXYPlot = makeWidthFlexible(XYPlot)

class MmrDistribution extends React.Component {
  state = {
    value: false
  }

  renderHint() {
    const { value } = this.state
    if (!value) { return null }

    return (
      <Hint value={value} style={{ background: '#111' }}>
        <div>MMR: {value.x}</div>
        <div>Players: {value.y}</div>
        <div>Percentile: {(value.percentile).toFixed(2)}</div>
      </Hint>
    )
  }

  render() {
    const blue = "#2185D0"
    const headerStyle = { margin: '60px 0px' }
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
      <Container>
        <Header inverted as="h2" textAlign="center" style={headerStyle}>
          Solo MMR Distribution
        </Header>

        <FlexibleXYPlot height={500}>
          <YAxis title="Players" />
          <XAxis title="MMR" />
          
          <VerticalBarSeries
            color="#2185D0"
            data={barData}
            onNearestX={value => this.setState({ value })}
          />
          <LineSeries
            color="orange"
            data={lineData}
            curve={'curveMonotoneX'}
          />

          {this.renderHint()}
        </FlexibleXYPlot>
      </Container>
    )
  }
}

export default MmrDistribution