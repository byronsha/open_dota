import React from 'react'

const CountBar = ({ height, width, color, text }) => (
  <div>
    <div style={{paddingBottom: '10px'}}>
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