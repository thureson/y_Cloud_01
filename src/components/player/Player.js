import React from 'react';
import './Player.css';
import user_input$ from '../../services/user-input'
import { handleInput } from '../../utils/input'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {
    user_input$.subscribe(event => {
      console.log('Handling... ', event.code, event.type)
      handleInput(event)
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
