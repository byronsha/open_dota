import React from 'react'
import {TableHeaderColumn} from 'material-ui/Table'
import {Icon} from 'semantic-ui-react'

const SortButtonPublic = ({
  text,
  width,
  ownOrderBy,
  publicOrderBy,
  publicOrderDirection,
  publicSetOrderBy,
  publicSetOrderDirection,
  style
}) => (
  <TableHeaderColumn
    width={width}
    style={style}
    onClick={() => {
      if (publicOrderBy !== ownOrderBy) {
        publicSetOrderBy(ownOrderBy)
        publicSetOrderDirection('desc')
      } else {
        const direction = publicOrderDirection === 'desc' ? 'asc' : 'desc'
        publicSetOrderDirection(direction)
      }
    }}
  >
    <span>{text}</span>
    {publicOrderBy === ownOrderBy && publicOrderDirection === 'desc' && <Icon name="long arrow down"/>}
    {publicOrderBy === ownOrderBy && publicOrderDirection === 'asc' && <Icon name="long arrow up"/>}
  </TableHeaderColumn>
)

export default SortButtonPublic