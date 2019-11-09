import React from "react";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: []
  };

  createTodo = (props) => {};

  addTodo = (todo) => {};

  updateTodo = (id, action) => {}

  clearTodo = () => {}

  displayTodo = () => {};

  handleSubmit = e => {};

  handleChange = e => {};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
