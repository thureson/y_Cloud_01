import {
  view,
  lensPath,
  head,
  last,
  sum,
  cond,
  T,
  equals,
  always,
  reduce,
  keys,
  compose,
  zipWith,
  map,
  identity,
  filter
} from 'ramda'

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

const directionToVector = cond([
  [equals('ArrowRight'), always([1, 0])],
  [equals('ArrowLeft'), always([-1, 0])],
  [equals('ArrowUp'), always([0, 1])],
  [equals('ArrowDown'), always([0, -1])],
  [T, always([0, 0])]
])

export const movementDirection = compose(
  reduce(
    (acc, cur) => zipWith(
      (x, y) => x + y, acc, cur
    ),
    [0, 0]
  ),
  map(directionToVector),
  keys,
  filter(identity),
)
