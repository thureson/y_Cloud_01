import { view, lensPath, head, last, sum } from 'ramda'

export const calculateMovement = (path, action, state) => sum(
  [
    view(
      lensPath(path),
      state
    ),
    last(path) === 'x' ?
      head(action.direction) :
      last(action.direction)
  ]
)