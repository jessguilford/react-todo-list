import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'

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
  
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
