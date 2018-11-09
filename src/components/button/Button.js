import React from 'react';
import './Button.css';

const Button = ({ title, action, children }) =>
  <div className="Button">
    <button onClick={() => action(title)}>
      { title }
    </button>
    { children }
  </div>

export default Button;
