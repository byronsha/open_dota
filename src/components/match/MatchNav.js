import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

const styles = {
  nav: {
    marginBottom: '20px'
  },
  tabs: {
    background: 'transparent',
    borderBottom: '1px solid #666'
  },
  tab: {
    color: 'white',
    fontWeight: '500',
    textTransform: 'capitalize'
  }
}

class MatchNav extends React.Component {
  handleClick = route => {
    const {router} = this.props
    const path = router.location.pathname
    let newPath = path.split('/')
    newPath.pop()
    if (path.indexOf('/graphs/') !== -1) {
      newPath.pop()
    }
    newPath.push(route)
    router.push(newPath.join('/'))
  }

  render() {
    const {router} = this.props
    const tabs = ['overview', 'scoreboard', 'graphs']
    const pathArr = router.location.pathname.split('/')
    const active = pathArr.indexOf('graphs') !== -1 ? 'graphs' : pathArr[pathArr.length - 1]

    return (
      <div style={styles.nav}>
        <Tabs value={active} tabItemContainerStyle={styles.tabs}>
          {tabs.map(tab => (
            <Tab
              key={tab}
              value={tab}
              label={tab}
              style={styles.tab}
              onClick={() => this.handleClick(tab)}
            />
          ))}
        </Tabs>
      </div>
    )
  }
}

export default MatchNav