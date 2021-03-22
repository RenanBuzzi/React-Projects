import React from 'react';
import * as ReactDOM from 'react-dom';
import Game from './Game';
import './App.css';
ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <div className="App">
      <div className="h1">Tic-Tac-Toe</div>
      {/* <Game /> */}
      <Game/>
    </div>
  );
}

export default App;
