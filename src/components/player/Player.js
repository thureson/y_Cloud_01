import React from 'react';
import './Player.css';
import user_input$ from '../../services/user-input'
import { handleInput } from '../../utils/input'
import { playerMove } from '../../store/actionCreators/player'
import { map, multiply } from 'ramda'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {
    user_input$.subscribe(event => {
      console.log('Handling... ', event.code, event.type)
      handleInput(event)

      /* Testing movement
      const cycle = interval => fn => setTimeout(
        () => {
          fn()

          // condition when to loop
          this.props.inputs['ArrowRight'] ?
            cycle(interval)(fn) :
            {}
        },
        interval
      )
      cycle(
        16
      )(
        () => {
          playerMove(
            map(
              multiply(this.props.speed),
              [1, -1]
            )
          )
        }
      )
      */
    })
  }

  render() {
    const { x, y, speed, children } = this.props
    return (
      <div className="Player">
        Player
        <p>{ 'x: ' + x + ', ' + 'y: ' + y }</p>
        <p>{ 'speed: ' + speed }</p>
        { children }
      </div>
    )
  }
}

export default Player;
