import React from 'react'
import {Todoitem} from './Todoitem'

export const Todos = (props) => {
    
    return (
        <div className="container"> 
            <h3 className="text-center">Todos List</h3>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
            <>
                { props.todos.length!==0 ? props.todos.map((todo) => {
                    return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                }) : <><h1>Your Todo list is empty</h1></> }
            </>
            </tbody>
</table>
        </div>
    )
}
