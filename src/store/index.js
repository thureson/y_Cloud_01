import { Subject } from 'rxjs';
import { startWith, scan } from 'rxjs/operators';
import { replace, actionIs, alter } from '../utils/state'
import initialState from './initialState'
import { cond, identity, T, compose } from 'ramda'

// TODO: make pointfree
const reducer = (action, state) => cond([
  [ 
    actionIs('SET_NAME'),
    replace(['data', 'people', 0, 'name'])
  ],
  [ 
    actionIs('SET_NAMES'), 
    action => compose(
      alter(['data', 'people', 0, 'name'], action.name1),
      alter(['data', 'people', 1, 'name'], action.name2)
    )
  ],
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

export const setNames = dispatcher((name1, name2) => ({  
  type: 'SET_NAMES',
  name1,
  name2
}));

export default state$