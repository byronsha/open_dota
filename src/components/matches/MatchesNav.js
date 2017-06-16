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
    textTransform: 'none'
  }
}

class MatchesNav extends React.Component {
  render() {
    const {
      path,
      router
    } = this.props

    let active = path.split('/')
    active = active[active.length - 1]

    return (
      <div style={styles.nav}>
        <Tabs value={active} tabItemContainerStyle={styles.tabs}>
          <Tab style={styles.tab} onClick={() => {router.push('/matches/pro')}} label="Professional" value="pro" />
          <Tab style={styles.tab} onClick={() => {router.push('/matches/public')}} label="Public" value="public" />
        </Tabs>
      </div>
    )
  }
}

export default MatchesNav