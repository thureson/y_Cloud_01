import React from 'react';
import { map, range } from 'ramda'
import Button from '../button/Button'
import './Controls.css'
import { dispatch } from '../../store'
console.log('c: ', dispatch)
const setButtonPressed = () => console.log('asd')

const Controls = ({ children }) =>
  <div className="Controls">
    <ul className="control-items">
    {
      map(
        (item) => 
          <li className="control-item">
            <Button
              title={ item }
              action={ setButtonPressed }
            />
          </li>,
        range(0,5)
      )
    }
    </ul>
    { children }
  </div>

export default Controls;
