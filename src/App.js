import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';

class App extends Component {
  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: 1,
        completed: false
      },
      {
        title: 'Blergh',
        id: 12,
        completed: false
      },
      {
        title: 'Laundry',
        id: 3,
        completed: false
      }
    ]
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

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div className="App">
            <Todos todos={this.state.todos} markComplete={this.markComplete}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
