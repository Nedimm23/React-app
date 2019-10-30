import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Nedim" age="28" />
        <Person name="Mihra" age="30" >My Hobbies: Tennis</Person>
        <Person />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 'h1', 'Hi, I am working here');
  }
}

export default App;
