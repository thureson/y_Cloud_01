import React from 'react';
import state$ from '../store'
import { buildApp } from '../utils/rendering'
import { dispatch } from '../store'
console.log('d: ', dispatch)
state$.subscribe(val => console.log('new', val))

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {
    state$.subscribe(newState => this.setState(newState))
    state$.subscribe((s) => console.log('hri', s))
  }

  render() {
    return buildApp(this.state)
  }
}

export default AppContainer

