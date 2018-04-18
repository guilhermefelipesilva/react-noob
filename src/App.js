import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Gui', age: 26 },
      { name: 'Karen', age: 23 },
      { name: 'Isadora', age: 21 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Cliquei')
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Karen', age: 23 },
        { name: 'Isadora', age: 30 }
      ]
    }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Olá Guilherme!</h1>
        <button onClick={() => this.switchNameHandler('Guilherme Felipe!')}>Mudar de nome</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Gui!')} >My Hobbie is sleep</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

//45
