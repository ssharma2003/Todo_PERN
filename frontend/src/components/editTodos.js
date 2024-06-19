import React, { Fragment, useState } from "react";
import axios from "axios";

const EditTodos = ({ todo }) => {
  //console.log(todo);
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async(e) =>{
    e.preventDefault()
    try {
      const body = {description}
      await axios.put(`http://localhost:2000/todos/${todo.todo_id}`, body)
      
    } catch (error) {
      console.log('error is', error)
    }
    window.location="./"
  }

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
        onClick={e=>setDescription(todo.description)}
      >
        Edit
      </button>

      <div
        class="modal fade"
        id={`id${todo.todo_id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit todo
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={e=>setDescription(todo.description)}
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button 
              type="button" 
              class="btn btn-warning"
              onClick={e=> updateDescription(e)}
              >
                Edit
              </button>

              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={e=>setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodos;
