import React from 'react';
import { map, range } from 'ramda'
import Button from '../button/Button'
import './Controls.css'
import { setPlayerSpeed } from '../../store/actionCreators/config'

const Controls = ({ children }) =>
  <div className="Controls">
    <ul className="control-items">
    {
      map(
        (item) => 
          <li className="control-item" key={ item }>
            <Button
              title={ item }
              action={ setPlayerSpeed }
            />
          </li>,
        range(0,5)
      )
    }
    </ul>
    { children }
  </div>

export default Controls;
