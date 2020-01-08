import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: true, 
      },
      {
        id: 2,
        title: 'Complete the Todo list',
        completed: false, 
      }, 
      {
        id: 3,
        title: 'Show it to mentor',
        completed: false, 
      }
    ]
  }

  render() {
    return (
      <div className="App">
       <Todos />
      </div>
    );
  }
  
}

export default App;
