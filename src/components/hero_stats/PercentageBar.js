import React from 'react'

const PercentageBar = ({ height, width, color, text }) => (
  <div>
    <div style={{ marginBottom: '5px' }}>
      {text}
    </div>
    <div style={{
      display: 'inline-block',
      position: 'relative',
      height: `${height}px`,
      width: `${width}%`,
      background: color
    }}/>
    <div style={{
      display: 'inline-block',
      position: 'relative',
      height: `${height}px`,
      width: `${(100 - width)}%`,
      background: '#eee'
    }}>
    </div>
  </div>
)

export default PercentageBar