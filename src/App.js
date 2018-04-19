import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'as1', name: 'Gui', age: 26 },
      { id: 'as2', name: 'Karen', age: 23 },
      { id: 'as3', name: 'Isadora', age: 21 }
    ],
    showPerson: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Olá Guilherme!</h1>
        <button style={style}
          onClick={this.togglePersonHandler}>Mudar de nome</button>
        {persons}
      </div>
    );
  }
}

export default App;

//45
