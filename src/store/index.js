import { Subject } from 'rxjs';
import { startWith, scan } from 'rxjs/operators';
import initialState from './initialState'
import { cond, flip } from 'ramda'
import actionsToStates from './actionsToStates'

const reducer = flip(cond(actionsToStates))

const action$ = new Subject();

const state$ = action$.pipe(
  startWith(initialState),
  scan(reducer)
)

export const dispatch = fn => (...args) =>
  action$.next(fn(...args));

export default state$