import React, { Fragment } from 'react';
import './App.css';
import ListTodos from './components/listTodos';
import InputTodo from './components/inputTodo';
import EditTodos from './components/editTodos';

const App = () => {
  return (
    <Fragment >
      <div className="container ">
        <InputTodo/>
        <ListTodos/>
      </div>
    </Fragment>
  )
}

export default App;