import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

const SortButtonPro = ({
  text,
  width,
  ownOrderBy,
  proOrderBy,
  proOrderDirection,
  proSetOrderBy,
  proSetOrderDirection
}) => (
  <Grid.Column
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
    <span style={{ fontWeight: proOrderBy === ownOrderBy ? 'bold' : 'normal' }}>{text}</span>
    {proOrderBy === ownOrderBy && proOrderDirection === 'desc' && <Icon name="long arrow down"/>}
    {proOrderBy === ownOrderBy && proOrderDirection === 'asc' && <Icon name="long arrow up"/>}
  </Grid.Column>
)

export default SortButtonPro