import React from 'react'

export const Todoitem = ({todo , onDelete}) => {
    return (
        <>
           <tr>
      <th scope="row">{todo.sno}</th>
      <td>{todo.title}</td>
      <td>{todo.desc}</td>
      <td><button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button></td>
    </tr>
    </>
   
    )
}
