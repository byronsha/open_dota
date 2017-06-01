import React from 'react'

const CountBar = ({ height, width, color, text }) => (
  <div>
    <div style={{ marginBottom: '5px' }}>
      {text}
    </div>
    <div style={{
      height: `${height}px`,
      width: `${width}%`,
      background: color
    }}>
    </div>
  </div>
)

export default CountBar