import { Subject } from 'rxjs';
import { startWith, scan } from 'rxjs/operators';
import { alter } from '../utils/state'
import initialState from './initialState'

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_NAME':
      return alter(['name'], action.name)(state)
    default:
      return state;
  }
}

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