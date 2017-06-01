import React from 'react'
import { Link } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'

const style = {
  marginBottom: '0px',
  border: 'none',
  boxShadow: 'none',
  background: '#eee'
}

const Nav = () => (
  <Menu borderless style={style}>
    <Container>
      <Link to="/home" className="item" activeClassName="active">Home</Link>
      <Link to="/hero_stats" className="item" activeClassName="active">Hero Stats</Link>
      <Link to="/about" className="item" activeClassName="active">About</Link>
    </Container>
  </Menu>
)

export default Nav