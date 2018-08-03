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

const dispatcher = fn => (...args) =>
  action$.next(fn(...args));
  
export const setName = dispatcher((name) => ({  
  type: 'SET_NAME',
  name
}));

export const setNames = dispatcher((name1, name2) => ({  
  type: 'SET_NAMES',
  name1,
  name2
}));

export default state$