import React from 'react'
import { Link } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary>
        <Container>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item name="hero_stats" active={activeItem === 'hero_stats'} onClick={this.handleItemClick}>
            <Link to="/hero_stats">Hero Stats</Link>
          </Menu.Item>
          <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
            <Link to="/about">About</Link>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Nav