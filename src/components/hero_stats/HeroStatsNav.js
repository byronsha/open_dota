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

class HeroStatsNav extends React.Component {
  render() {
    const {router} = this.props
    const path = router.location.pathname
    let active = path.split('/')
    active = active[active.length - 1]

    return (
      <div style={styles.nav}>
        <Tabs value={active} tabItemContainerStyle={styles.tabs}>
          <Tab style={styles.tab} onClick={() => {router.push('/heroes/pro')}} label="Professional" value="pro" />
          <Tab style={styles.tab} onClick={() => {router.push('/heroes/public')}} label="Public" value="public" />
        </Tabs>
      </div>
    )
  }
}

export default HeroStatsNav