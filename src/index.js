import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/AppContainer';
import { dispatch } from './store'
console.log(dispatch)

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);

