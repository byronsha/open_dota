import React from 'react'

const CountBar = ({height, width, color, text}) => {
  const styles = {
    text: {
      paddingBottom: '8px'
    },
    bar: {
      height: `${height}px`,
      width: `${width}%`,
      background: color
    }
  }

  return (
    <div>
      <div style={styles.text}>{text}</div>
      <div style={styles.bar}></div>
    </div>
  )
}

export default CountBar