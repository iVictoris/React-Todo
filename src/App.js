import React from "react";
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';

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

    const todoForm = (
      <Form>
        <Field type='text' name='todo' placeholder='Enter todo item' />
      </Form>
    )

    return (
      <div>
        {todoForm}
      </div>
    );
  }
}

export default App;
