
import React, { useState } from 'react'
import MainContent from './components/MainContent';
import Navbar from './components/Navbar/Navbar'

function App(props) {
 
  const [state, setState] = useState('works')
  
  return (
    <div className="App">
      <Navbar setState={setState} />
      <MainContent state={state} />
    </div>
  );
}

export default App;
