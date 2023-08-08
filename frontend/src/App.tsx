import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const getGame = () => {
    return fetch('http://localhost:3000/api/v1/game_boards', {method: 'GET'}).then((res) => res.json()).then(json => json);
  }

  const game = getGame().then((game) => console.log(game));

  return (
    <div className="App">
      Hello!
    </div>
  );
}

export default App;
