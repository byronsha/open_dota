import React from 'react'
import { Link } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'

const style = {
  marginBottom: '0px',
  border: 'none',
  boxShadow: 'none',
  borderRadius: '0px'
}

const Nav = () => (
  <Menu borderless inverted size="huge" style={style}>
    <Container>
      <Link to="/matches" className="item" activeClassName="active">Matches</Link>
      <Link to="/heroes" className="item" activeClassName="active">Heroes</Link>
      <Link to="/about" className="item" activeClassName="active">About</Link>
    </Container>
  </Menu>
)

export default Nav