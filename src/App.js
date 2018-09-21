import React, { Component } from 'react';
import "./App.css";
import WordCard from './WordCard';

const word = "Sanlim";
class App extends Component {
  render() {
    return (
      <div>
        <WordCard value= {word}/>
        <WordCard value= "Nisoy"/>
      </div>
    );
  }
}

export default App;