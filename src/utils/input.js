import { compose } from 'ramda'
import { setControlBtn } from '../store/actionCreators/controls'

// ?should: List of conditions checked everytime
//          and perform all actions.
export const handleInput = compose(
  (e) => setControlBtn(e.code, e.type === 'keydown')
)