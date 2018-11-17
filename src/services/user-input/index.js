import { Subject } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

const events$ = new Subject();

const user_inputs$ = events$.pipe(
  filter(e => !e.repeat),
  tap(event => console.log(
      '      -->', event
  ))
)

const dispatch = event => 
  events$.next(event);

// configure which inputs
window.addEventListener(
  'keydown',
  (e) => dispatch(e)
)

window.addEventListener(
  'keyup',
  (e) => dispatch(e)
)

export default user_inputs$