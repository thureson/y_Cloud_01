import { tap, curry } from 'ramda'

export const log = tap(curry(console.log))