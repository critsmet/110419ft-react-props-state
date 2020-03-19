import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToysContainer from './ToysContainer'

function App() {
  return (
    <div className="App">
      <div id="toy-header">
        <img
          src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
          alt="toy-header"
        />
      </div>
      <div id="search-bar">
          <input />
          <button>Search!</button>
      </div>
      <ToysContainer/>
    </div>
  );
}

export default App;

//A component is a collection of elements that represent a unity in a goal or task

//As we nest our components, their specifity increases
