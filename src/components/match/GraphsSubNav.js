import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

const styles = {
  nav: {
    marginBottom: '20px',
    width: '50%'
  },
  tabs: {
    background: 'transparent',
    borderBottom: '1px solid #666'
  },
  tab: {
    color: '#ddd',
    height: '36px',
    fontSize: '0.85em',
    fontWeight: '400',
    textTransform: 'capitalize'
  }
}

class GraphsSubNav extends React.Component {
  handleClick = route => {
    const {router} = this.props
    const path = router.location.pathname
    let newPath = path.split('/')
    newPath.pop()
    newPath.push(route)
    router.push(newPath.join('/'))
  }

  render() {
    const {router} = this.props
    const tabs = ['gold', 'exp', 'net_worth']
    const pathArr = router.location.pathname.split('/')
    const active = pathArr[pathArr.length - 1]

    return (
      <div style={styles.nav}>
        <Tabs value={active} tabItemContainerStyle={styles.tabs}>
          {tabs.map(tab => (
            <Tab
              key={tab}
              value={tab}
              label={tab.replace('_', ' ')}
              style={styles.tab}
              onClick={() => this.handleClick(tab)}
            />
          ))}
        </Tabs>
      </div>
    )
  }
}

export default GraphsSubNav