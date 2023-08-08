import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Splash } from './components/Splash';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Splash}/>
      </Routes>
    </div>
  );
}

export default App;
