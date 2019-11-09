import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";

import { generateID } from "./utils/generateID";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: []
  };

  createTodo = text => {
    const id = generateID(this.state.todos);
    const todo = {
      id,
      text,
      completed: false
    };

    return todo;
  };

  addTodo = todo => {
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  updateTodo = (id, action) => {
    switch (action) {
      case "complete":
        const todo = this.state.todos.find(todo => todo.id === id); // mutating directly, should probably clone
        todo.completed = !todo.completed;


        const otherTodos = this.state.todos.filter(todo => todo.id !== id)
        const todos = [...otherTodos, todo];
        this.setState({ todos });
        break;

      default:
        return;
    }
  };

  clearTodo = () => {
    const notDoneTodos = this.state.todos.filter(todo => !todo.completed)
    this.setState({todos: notDoneTodos}, () => console.log(this.state.todos));
  };

  render() {
    return (
      <div>
        <TodoForm
          context={this.state.todos}
          addTodo={this.addTodo}
          createTodo={this.createTodo}
          clearTodo={this.clearTodo}
        />

        {this.state.todos && (
          <TodoList todos={this.state.todos} updateTodo={this.updateTodo} />
        )}
      </div>
    );
  }
}

export default App;
