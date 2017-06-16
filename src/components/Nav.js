import React from 'react'
import {Link} from 'react-router'
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const styles = {
  link: {
    color: 'white'
  }
}

const Nav = () => (
  <Toolbar>
    <ToolbarGroup firstChild={true}>
      <MenuItem>
        <Link to="/matches" style={styles.link}>Matches</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/heroes" style={styles.link}>Heroes</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/mmr" style={styles.link}>MMR</Link>
      </MenuItem>
    </ToolbarGroup>
  </Toolbar>
)

export default Nav