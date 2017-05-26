import React from 'react'

const PercentageBar = ({ height, width, color, text }) => (
  <div>
    <div style={{
      display: 'inline-block',
      position: 'relative',
      height: `${height}px`,
      width: `${width * 1.5}px`,
      background: color
    }}/>
    <div style={{
      display: 'inline-block',
      position: 'relative',
      height: `${height}px`,
      width: `${150 - width * 1.5}px`,
      background: '#eee'
    }}>
      <span style={{
        position: 'absolute',
        fontSize: '10px',
        right: '-65px',
        top: '-5px',
        whiteSpace: 'nowrap'
      }}>
        {text}
      </span>
    </div>
  </div>
)

export default PercentageBar