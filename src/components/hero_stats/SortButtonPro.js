import React from 'react'
import {TableHeaderColumn} from 'material-ui/Table'
import {Icon} from 'semantic-ui-react'

const SortButtonPro = ({
  text,
  width,
  ownOrderBy,
  proOrderBy,
  proOrderDirection,
  proSetOrderBy,
  proSetOrderDirection
}) => (
  <TableHeaderColumn
    width={width}
    onClick={() => {
      if (proOrderBy !== ownOrderBy) {
        proSetOrderBy(ownOrderBy)
        proSetOrderDirection('desc')
      } else {
        const direction = proOrderDirection === 'desc' ? 'asc' : 'desc'
        proSetOrderDirection(direction)
      }
    }}
  >
    <span>{text}</span>
    {proOrderBy === ownOrderBy && proOrderDirection === 'desc' && <Icon name="long arrow down"/>}
    {proOrderBy === ownOrderBy && proOrderDirection === 'asc' && <Icon name="long arrow up"/>}
  </TableHeaderColumn>
)

export default SortButtonPro