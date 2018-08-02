import React from 'react'
import {
  view,
  lensPath,
  map,
  objOf,
  last,
  ifElse,
  isEmpty,
  always,
  compose,
  mergeAll,
  converge,
  flip,
  curry
} from 'ramda'
export const element = curry(React.createElement)


// TODO: Refactor
const pathToObject = (state) => compose(
  mergeAll,
  map(
    converge(
      objOf,
      [
        last,
        compose(
          flip(view)(state),
          lensPath
        )
      ]
    )
  )
)

// TODO: pointfree
const propsOrNull = (state) => ifElse(
  isEmpty,
  always(null),
  pathToObject(state)
)

// TODO: Refactor
const generateTree = state => node => {
  return node.element ? 
    element(
      node.element,
      propsOrNull(state)(node.props),
      ...map(generateTree(state), node.children)
    ) :
    node
}
export const buildApp = (state) => {
  return state.app ? generateTree(state)(state.app) : element('div')(null)(null)
}