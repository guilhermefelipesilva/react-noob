import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Gui', age: 26 },
      { name: 'Karen', age: 23 },
      { name: 'Isadora', age: 21 }
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log('Cliquei')
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Karen', age: 23 },
        { name: 'Isadora', age: 30 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Gui', age: 26 },
        { name: event.target.value, age: 23 },
        { name: 'Isadora', age: 30 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson: !doesShow })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Olá Guilherme!</h1>
        <button style={style}
          onClick={this.togglePersonHandler}>Mudar de nome</button>
        {
          this.state.showPerson === true ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Gui!')}
                changed={this.nameChangedHandler} >My Hobbie is sleep</Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
            </div>
            : null
        }

      </div>
    );
  }
}

export default App;

//45
