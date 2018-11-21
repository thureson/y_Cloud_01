import { dispatch } from '../index'

export const playerMove = direction => dispatch({  
  type: 'PLAYER_MOVE',
  direction
})
