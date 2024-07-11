import React from 'react';
import logo from './logo.svg';
import './App.css';
import DigitalsMobile from './components/mobile/digitals';
import HeaderMobile from './components/mobile/header';
import NavMobile from './components/mobile/nabvar';

function App() {
  return (
    <div className="App">

      <HeaderMobile/>
      <DigitalsMobile/>
      <NavMobile/>
    </div>
  );
}

export default App;
