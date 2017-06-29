import React from 'react'
import { Link } from 'react-router'
import MenuItem from 'material-ui/MenuItem'
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar'

const Nav = ({ router }) => {
  let links = ['matches', 'heroes', 'mmr']

  return (
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        {links.map(link => (
          <MenuItem 
            key={link}
            onClick={() => router.push(`/${link}`)}>
            {link.toUpperCase()}
          </MenuItem>
        ))}
      </ToolbarGroup>
    </Toolbar>
  )
}

export default Nav