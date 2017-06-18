import React from 'react'

const PercentageBar = ({height, width, color, text}) => {
  const styles = {
    text: {
      paddingBottom: '8px'
    },
    bar: {
      display: 'inline-block',
      position: 'relative',
      height: `${height}px`,
      width: `${width}%`,
      background: color
    },
    background: {
      display: 'inline-block',
      position: 'relative',
      height: `${height}px`,
      width: `${(100 - width)}%`,
      background: '#ccc'
    }
  }

  return (
    <div>
      <div style={styles.text}>{text}</div>
      <div style={styles.bar}></div>
      <div style={styles.background}></div>
    </div>
  )
}

export default PercentageBar