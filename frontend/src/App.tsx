import React from 'react';
import logo from './logo.svg';
import './App.css';
import DigitalsMobile from './components/mobile/digitals';
import NavMobile from './components/mobile/navbar';

function App() {
  return (
    <div className="App">

      <NavMobile/>
      <DigitalsMobile/>
    </div>
  );
}

export default App;
