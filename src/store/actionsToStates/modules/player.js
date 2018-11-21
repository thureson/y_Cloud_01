import { actionIs, alter } from '../../../utils/state'
import { compose } from 'ramda'
import { calculateMovement } from '../../../utils/movement'

export default [
  [ 
    actionIs('PLAYER_MOVE'),
    action => state => compose(
      alter(
        ['data', 'player', 'position', 'x'],
        calculateMovement(
          ['data', 'player', 'position', 'x'],
          action,
          state
        )
      ),
      alter(
        ['data', 'player', 'position', 'y'],
        calculateMovement(
          ['data', 'player', 'position', 'y'],
          action,
          state
        )
      )
    )(state)
  ]
]