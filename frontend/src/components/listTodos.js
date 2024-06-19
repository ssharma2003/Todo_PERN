import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import EditTodos from "./editTodos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:2000/todos");
      setTodos(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/todos/${id}`);
      setTodos(todos.filter((todos) => todos.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center border-4">
        <thead>
          <tr>
            <th>Todo id</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todos) => (
            <tr key={todos.todo_id}>
              <td>{todos.todo_id}</td>
              <td>{todos.description}</td>
              <td>
                <EditTodos todo ={todos}/>

              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todos.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
