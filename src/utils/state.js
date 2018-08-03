import { equals, compose, set, lensPath, prop, last } from 'ramda'

export const replace = path => action => set(lensPath(path), prop(last(path))(action))
export const actionIs = target => compose(equals(target), prop('type')) 