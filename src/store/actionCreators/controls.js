import { dispatch } from '../index.js'

export const setButtonPressed = dispatch((button) => ({  
  type: 'SET_BUTTON_PRESSED',
  button
}));