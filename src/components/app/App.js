import React from 'react';
import './App.css';
import { setName } from '../../store/actionCreators/example'

const App = ({ name, children }) =>
  <div className="App">
    <p> App! </p>
    <button onClick={() => setName('kaput')}>
      { name }
    </button>
    { children }
  </div>

export default App;
