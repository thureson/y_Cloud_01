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

// TODO: Make all pointfree
const findByPath = state => compose(
  flip(view)(state),
  lensPath
)

const pathAsObject = state => converge(
  objOf, [ last, findByPath(state) ]
)

const pathsToProps = state => compose(
  mergeAll,
  map( pathAsObject(state) )
)

const propsOrNull = state => ifElse(
  isEmpty,
  always(null),
  pathsToProps(state)
)

// TODO: Refactor, if using ramdas when -> callstack max. Something with ramda and recursion?
const generateTree = state => node => {
  return node.element ? 
    element(
      node.element,
      propsOrNull(state)(node.props),
      ...map(generateTree(state), node.children)
    ) :
    node
}

export const buildApp = state => {
  return state.app ? generateTree(state)(state.app) : element('div')(null)(null)
}