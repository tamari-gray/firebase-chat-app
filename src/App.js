import React from 'react';
import Title from './components/Title'
import Messages from './components/Messages'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Messages/>
      </header>
    </div>
  );
}

export default App;
