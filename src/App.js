import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Guilherme', age: 26 },
      { name: 'Karen', age: 23 },
      { name: 'Isadora', age: 21 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Cliquei')
    this.setState({
      persons: [
        { name: 'Guilherme Felipe', age: 26 },
        { name: 'Karen', age: 23 },
        { name: 'Isadora', age: 23 }
      ]
    }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Olá Guilherme!</h1>
        <button onClick={this.switchNameHandler}>Mudar de nome</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbie is sleep</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
