import { dispatch } from '../index.js'

export const setControlBtn = (btn, down) => dispatch({  
  type: 'SET_CONTROL_BTN',
  btn,
  down
})