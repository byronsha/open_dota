export const PRO_SET_ORDER_BY = 'PRO_SET_ORDER_BY'
export const PRO_SET_ORDER_DIRECTION = 'PRO_SET_ORDER_DIRECTION'
export const PUBLIC_SET_ORDER_BY = 'PUBLIC_SET_ORDER_BY'
export const PUBLIC_SET_ORDER_DIRECTION = 'PUBLIC_SET_ORDER_DIRECTION'

export function proSetOrderBy(stat) {
  return {
    type: PRO_SET_ORDER_BY,
    stat
  }
}

export function proSetOrderDirection(direction) {
  return {
    type:  PRO_SET_ORDER_DIRECTION,
    direction
  }
}

export function publicSetOrderBy(stat) {
  return {
    type: PUBLIC_SET_ORDER_BY,
    stat
  }
}

export function publicSetOrderDirection(direction) {
  return {
    type:  PUBLIC_SET_ORDER_DIRECTION,
    direction
  }
}
