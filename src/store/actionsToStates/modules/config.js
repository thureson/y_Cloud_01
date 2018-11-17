import { actionIs, replace } from '../../../utils/state'

export default [
  [ 
    actionIs('SET_PLAYER_SPEED'),
    replace(['data', 'player', 'config', 'speed'])
  ]
]