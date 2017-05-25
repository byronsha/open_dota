import React from 'react'

const HorizontalBar = ({ height, width, color, text }) => (
  <div>
    <div style={{
      position: 'relative',
      height: `${height}px`,
      width: `${width}px`,
      background: color
    }}>
      <span style={{
        position: 'absolute',
        fontSize: '10px',
        left: `${width + 5}px`,
        top: '-5px',
        whiteSpace: 'nowrap'
      }}>
        {text}
      </span>
    </div>
  </div>
)

export default HorizontalBar