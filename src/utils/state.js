import { set, lensPath } from 'ramda'

export const alter = (path, value) => set(lensPath(path), value)