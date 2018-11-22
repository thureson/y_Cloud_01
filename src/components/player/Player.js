import React from 'react';
import './Player.css';
import user_input$ from '../../services/user-input'
import { handleInput } from '../../utils/input'
import { playerMove } from '../../store/actionCreators/player'
import { map, multiply } from 'ramda'
import { movementDirection } from '../../utils/movement'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {
    user_input$.subscribe(event => {
      handleInput(event)

      // Testing movement
      const cycleEvery = interval => fn => setTimeout(
        () => {
          fn()
          cycleEvery(interval)(fn)
        },
        interval
      )
      cycleEvery(
        16
      )(
        () => {
          playerMove(
            map(
              multiply(this.props.speed),
              movementDirection(this.props.inputs)
            )
          )
        }
      )
    })
  }

  render() {
    const { x, y, speed, children } = this.props
    return (
      <div className="Player">
        Player
        <p>{ 'x: ' + x + ', ' + 'y: ' + y }</p>
        <p>{ 'speed: ' + speed }</p>
        <p style={{
          position: 'absolute',
          bottom: y,
          left: x
        }}>
          test
        </p>
        { children }
      </div>
    )
  }
}

export default Player;
