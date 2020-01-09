import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import uuid from 'uuid';

import './App.css';




class App extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    newItem: ''
  }

   setLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    this.setState({newItem: ''});
  }

  onChange = (event) => {
    this.setState({newItem: event.target.value });
  
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.addToDo();
    
    
  }


  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) }, this.setLocalStorage);
  }
  
  delTodo = (id) => {
    console.log(id);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }, this.setLocalStorage);
  }

  addToDo = () => {
    console.log('add', this.state.newItem);
    const newTodo = {
      id: uuid.v4(), 
      title: this.state.newItem,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]}, this.setLocalStorage);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddToDo addToDo={this.addToDo} newItem={this.state.newItem} onChange={this.onChange} onSubmit={this.onSubmit}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
        
      </div>
    );
  }
  
}



export default App;
