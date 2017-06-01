import React from 'react'
import { Link } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'

const style = {
  border: 'none',
  boxShadow: 'none',
  background: '#eee'
}

const HeroStatsNav = () => (
  <Menu borderless style={style}>
    <Container>
      <Link to="/hero_stats/pro" className="item" activeClassName="active">Pro</Link>
      <Link to="/hero_stats/public" className="item" activeClassName="active">Public</Link>
    </Container>
  </Menu>
)

export default HeroStatsNav