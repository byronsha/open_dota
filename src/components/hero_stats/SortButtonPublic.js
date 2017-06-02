import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

const SortButtonPublic = ({
  text,
  width,
  ownOrderBy,
  publicOrderBy,
  publicOrderDirection,
  publicSetOrderBy,
  publicSetOrderDirection
}) => (
  <Grid.Column
    width={width}
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
    <span style={{ fontWeight: 'bold' }}>{text}</span>
    {publicOrderBy === ownOrderBy && publicOrderDirection === 'desc' && <Icon name="long arrow down"/>}
    {publicOrderBy === ownOrderBy && publicOrderDirection === 'asc' && <Icon name="long arrow up"/>}
  </Grid.Column>
)

export default SortButtonPublic