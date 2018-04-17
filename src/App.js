import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Olá Guilherme!</h1>
        <Person name="Guilherme" age="26" />
        <Person name="Paola" age="29" >My Hobbie is sleep</Person>
        <Person name="Karen" age="23" />
      </div>
    );
  }
}

export default App;
