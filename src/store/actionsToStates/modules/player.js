import { actionIs, alter } from '../../../utils/state'
import { view, lensPath } from 'ramda'
/*
export default [
  [ 
    actionIs('PLAYER_MOVE_RIGHT'),
    action => state => alter(
      ['data', 'player', 'position', 'x'],
      view(
        lensPath(['data', 'player', 'position', 'x']),
        state
      ) + 1
    )(state)
  ]
]*/