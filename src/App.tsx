import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './components/bienvenido';
import Bienvenido from './components/bienvenido';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >         
        </a> 
        <Bienvenido myForm='Bienvenido a React : ORNS'/>

        
      </header>
    </div>
  );
}

export default App;
