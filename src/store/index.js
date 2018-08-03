import { Subject } from 'rxjs';
import { startWith, scan } from 'rxjs/operators';
import { replace, actionIs } from '../utils/state'
import initialState from './initialState'
import { cond, identity, T } from 'ramda'

// TODO: make pointfree
const reducer = (action, state) => cond([
  [actionIs('SET_NAME'), replace(['data', 'people', 0, 'name'])],
  [T, ac => identity]
])(state)(action)

const action$ = new Subject();

const state$ = action$.pipe(
  startWith(initialState),
  scan(reducer)
)

const dispatcher = fn => (...args) =>
  action$.next(fn(...args));
  
export const setName = dispatcher((name) => ({  
  type: 'SET_NAME',
  name
}));

export default state$