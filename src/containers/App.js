import React from 'react'
import Nav from '../components/Nav'

const styles = {
  mainContent: {
    margin: '50px 250px'
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        
        <div style={styles.mainContent}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App