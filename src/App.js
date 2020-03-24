import React from 'react';
import './App.css';

import generator from './generator'

function App() {
  return (
    <div className="App">
      {generator()}
      {console.log('generator!')}
      
    </div>
  );
}

export default App;
