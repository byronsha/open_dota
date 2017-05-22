import React from 'react'
import { Link } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'

const style = {
  marginBottom: '0px'
}

const Nav = () => (
  <Menu style={style} size="large">
    <Container>
      <Link to="/home" className="blue item" activeClassName="active">Home</Link>
      <Link to="/hero_stats" className="red item" activeClassName="active">Hero Stats</Link>
      <Link to="/about" className="green item" activeClassName="active">About</Link>
    </Container>
  </Menu>
)

export default Nav