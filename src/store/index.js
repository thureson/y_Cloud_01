import { Subject } from 'rxjs';
import { startWith, scan, tap } from 'rxjs/operators';
import initialState from './initialState'
import { cond, prop } from 'ramda'
import actionsToStates from './actionsToStates'

const reducer = (acc, cur) => cond(actionsToStates)(cur)(acc)

const action$ = new Subject();

const state$ = action$.pipe(
  startWith(initialState),
  /*tap(
    action => console.log(
      '      -->', prop('type')(action)
    )
  ),*/
  scan(reducer)
)

export const dispatch = action => 
  action$.next(action);

export default state$