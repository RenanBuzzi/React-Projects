import React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import Game from './Game';
ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <div className="App">
      <div className="h1">Tic-Tac-Toe</div>
      <Game/>
    </div>
  );
}

export default App;
