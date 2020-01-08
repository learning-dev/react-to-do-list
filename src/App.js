import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: true, 
      },
      {
        id: uuid.v4(),
        title: 'Complete the Todo list',
        completed: true, 
      }, 
      {
        id: uuid.v4(),
        title: 'Show it to mentor',
        completed: false, 
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) })
  }
  
  delTodo = (id) => {
    console.log(id);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  addToDo = (title) => {
    const newTodo = {
      id: uuid.v4(), 
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddToDo addToDo={this.addToDo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
        
      </div>
    );
  }
  
}



export default App;
