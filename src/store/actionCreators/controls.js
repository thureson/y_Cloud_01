import { dispatch } from '../index.js'

export const setButtonPressed = selectedBtn => dispatch({  
  type: 'SET_BUTTON_PRESSED',
  selectedBtn
})