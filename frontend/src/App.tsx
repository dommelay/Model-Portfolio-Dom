import React from 'react';
import logo from './logo.svg';
import './App.css';
import DigitalsMobile from './components/mobile/digitals';
import HeaderMobile from './components/mobile/header';
import NavMobile from './components/mobile/nabvar';
import AttributesMobile from './components/mobile/attributes';

function App() {
  return (
    <div className="App">

      <HeaderMobile/>
      <DigitalsMobile/>
      <AttributesMobile/>
      <NavMobile/>
    </div>
  );
}

export default App;
