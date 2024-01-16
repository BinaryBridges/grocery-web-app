import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Tabular from './Components/Tabular/Tabular';

function App() {
  return (
    <div className="App">
      <Tabular></Tabular>
      <header className="App-header">
        
        <p>
          Groceries!
        </p>
      </header>
    </div>
  );
}

export default App;
