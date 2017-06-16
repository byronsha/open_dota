import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';

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
    const { path, router } = this.props
    let newPath = path.split('/')
    newPath[newPath.length - 1] = route
    router.push(newPath.join('/'))
  }

  render() {
    const {
      path,
      router
    } = this.props

    let active = path.split('/')
    active = active[active.length - 1]

    const tabs = ['overview', 'scoreboard', 'graphs']

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