import React, { Component } from 'react';
import "./App.css";
import WorldCard from './WorldCard';

const word = "Hello";
class App extends Component {
  render() {
    return (
      <div>
        <WorldCard value="hello"/>
        </div>
    );
  }
}

export default App;
