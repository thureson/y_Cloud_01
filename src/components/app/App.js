import React from 'react';
import './App.css';

const App = ({ name, children }) =>
  <div className="App">
    <p> App! </p>
    <p> { name } </p>
    {children}
  </div>

export default App;
