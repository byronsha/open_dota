import React from 'react'
import {connect} from 'react-redux'
import Nav from '../components/Nav'
import {fetchItems} from '../actions/api'

const styles = {
  app: {
    margin: '50px 250px'
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    return (
      <div>
        <Nav />
        
        <div style={styles.app}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = ({
  fetchItems
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)