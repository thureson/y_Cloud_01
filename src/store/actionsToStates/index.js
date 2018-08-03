import { reduce, flip, concat, T, always, identity } from 'ramda'
import modules from './modules'

const fallback = [[ T, always(identity) ]]
const combine = reduce(flip(concat), fallback)

export default combine(modules)