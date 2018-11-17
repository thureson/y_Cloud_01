import { actionIs, alter } from '../../../utils/state'

export default [
  [ 
    actionIs('SET_CONTROL_BTN'),
    action => alter(
      ['data', 'controls', 'inputs', action.btn],
      action.down
    )
  ]
]