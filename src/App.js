import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";

import { generateID } from "./utils/generateID";

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

  updateTodo = (id, action) => {};

  clearTodo = () => {};

  handleSubmit = e => {};

  handleChange = e => {};

  render() {
    return (
      <div>
        <TodoForm
          context={this.state.todos}
          addTodo={this.addTodo}
          createTodo={this.createTodo}
        />

        {this.state.todos && null}
      </div>
    );
  }
}

export default App;
