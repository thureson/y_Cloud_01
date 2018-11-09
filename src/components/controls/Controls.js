import React from 'react';
import { map, range } from 'ramda'
import Button from '../button/Button'
import './Controls.css'
import { setButtonPressed } from '../../store/actionCreators/controls'

const Controls = ({ children, selectedBtn }) =>
  <div className="Controls">
    <ul className="control-items">
    {
      map(
        (item) => 
          <li className="control-item" key={ item }>
            <Button
              title={ item }
              action={ setButtonPressed }
            />
          </li>,
        range(0,5)
      )
    }
    </ul>
    <p>
      { selectedBtn }
    </p>
    { children }
  </div>

export default Controls;
