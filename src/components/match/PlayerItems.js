import React from 'react'
import Item from '../../containers/Item'

const styles = {
  item: {
    width: '33%',
    padding: '1px',
    display: 'inline-block'
  }
}

const PlayerItems = ({player, containerStyle}) => {
  const slots = [0, 1, 2, 3, 4, 5]

  return (
    <div style={containerStyle}>
      {slots.map(slot => {
        const key = player.account_id + slot
        const itemId = player[`item_${slot}`]

        if (itemId === 0 ) {return null}

        return (
          <div key={key} style={styles.item}>
            <Item itemId={itemId} />
          </div>
        )
      })}
    </div>
  )
}

export default PlayerItems