import { actionIs, replace } from '../../../utils/state'

export default [
  [ 
    actionIs('SET_BUTTON_PRESSED'),
    replace(['data', 'controls', 'button'])
  ]
]