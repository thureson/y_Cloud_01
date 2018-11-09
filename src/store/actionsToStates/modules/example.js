import { actionIs, replace, alter } from '../../../utils/state'
import { compose } from 'ramda'

export default [
  [ 
    actionIs('SET_NAME'),
    replace(['data', 'people', 1, 'name'])
  ],
  [ 
    actionIs('SET_NAMES'), 
    action => compose(
      alter(['data', 'people', 0, 'name'], action.name1),
      alter(['data', 'people', 1, 'name'], action.name2)
    )
  ]
]