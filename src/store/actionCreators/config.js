import { dispatch } from '../index.js'

export const setPlayerSpeed = speed => dispatch({  
  type: 'SET_PLAYER_SPEED',
  speed
})