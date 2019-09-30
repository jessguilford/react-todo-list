import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: 1,
        completed: false
      },
      {
        title: 'Do the dishes',
        id: 2,
        completed: false
      },
      {
        title: 'Laundry',
        id: 3,
        completed: false
      }
    ],
    idCount: 3
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)]
    });
  }

  addTodo = (title) => {
    const id = this.state.idCount + 1;
    const todo = {
      title: title,
      id: id,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, todo],
      idCount: id
    });;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <div className="App">
            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
