import React from "react";

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const todoForm = ({clearTodo}) => (
  <Form>
    <label>Enter a Todo item: &nbsp;
      <Field type="text" name="todo" placeholder="Enter todo item" />
    </label>
    <button type='submit'>+</button>
    <button type='button' onClick={() => clearTodo()}>Clear Completed Todos</button>
  </Form>
);

const TodoForm = withFormik({
  mapPropsToValues({ todo = "" }) {
    return { todo };
  },
  validationSchema: Yup.object().shape({
    todo: Yup.string().required(`You're required to enter text here.`)
  }),
  handleSubmit({todo}, { props: {addTodo, createTodo}, resetForm }) {

    const todoItem = createTodo(todo)

    addTodo(todoItem);
    resetForm({ todo: "" });
  }
})(todoForm);

export default TodoForm;
