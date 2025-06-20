import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards.jsx';

function App() {


  return (
    <>
      <div className="base">
        <div className="description">
          <h1>🍓 🍊 🍌 🥑 🫐 🍇 Fruit Trivia!🍓 🍊 🍌 🥑 🫐 🍇</h1>

          <h3>Welcome to Fruit Trivia! In this game, you will be asked random questions about fruits. </h3>
          <h1></h1>
        </div>
        <Cards />
      </div>

    </>
  )
}

export default App;
